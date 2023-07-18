import {
  SecretsManagerRotationEvent,
  SecretsManagerRotationHandler
} from 'aws-lambda';
import {
  DescribeSecretCommand,
  GetSecretValueCommand,
  PutSecretValueCommand,
  SecretsManagerClient,
  UpdateSecretVersionStageCommand,
} from '@aws-sdk/client-secrets-manager';

const secretsClient = new SecretsManagerClient({ region: process.env.AWS_REGION });

async function createSecret(
  arn: string,
  token: string,
): Promise<void> {
  // Check if the current version exists
  await secretsClient.send(
    new GetSecretValueCommand({
      SecretId: arn,
      VersionStage: 'AWSCURRENT',
    }),
  );

  try {
    // Check if the pending version exists otherwise create a new one
    await secretsClient.send(
      new GetSecretValueCommand({
        SecretId: arn,
        VersionStage: 'AWSPENDING',
      }),
    );

    console.log(`Secret version ${token} already exists for secret ${arn}`);
  } catch (exception) {
    /**
     * Here we would create a new secret / create a new API key in an external service and create a new secret version.
     *
     * For this demo purpose we are going to create a new secret version with a random string
     */

    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // If the current version does not exist, create a new one
    await secretsClient.send(
      new PutSecretValueCommand({
        SecretId: arn,
        ClientRequestToken: token,
        SecretString: randomString,
        VersionStages: ['AWSPENDING'],
      }),
    );

    console.log(`Secret version ${token} created for secret ${arn}`);
  }
}

async function setSecret(): Promise<void> {
  /**
   *
   * Set the secret in the external application / service unless the token has been generated
   * by the previous step by using an api.
   *
   */
}

async function testSecret(): Promise<void> {
  /**
   *
   * Test if the secret is working and the correct permissions are set in the external application / service
   *
   */
}

async function finishSecret(
  arn: string,
  token: string,
): Promise<void> {
  const metaData = await secretsClient.send(
    new DescribeSecretCommand({
      SecretId: arn,
    }),
  );

  // Check if the current version is already set correctly and stop the process.
  let currentVersion: string | undefined = undefined;
  if (metaData.VersionIdsToStages) {
    for (const version in metaData.VersionIdsToStages) {
      if (metaData.VersionIdsToStages[version].includes('AWSCURRENT')) {
        if (version === token) {
          console.log(`Version ${version} is already set as AWSCURRENT for secret ${arn}`)
          return;
        }
        currentVersion = version;
        break;
      }
    }
  }

  // If not finialize the secret rotation process
  await secretsClient.send(
    new UpdateSecretVersionStageCommand({
      SecretId: arn,
      VersionStage: 'AWSCURRENT',
      MoveToVersionId: token,
      RemoveFromVersionId: currentVersion,
    }),
  );

  console.log('Secret rotation process finished');
}

export const handler: SecretsManagerRotationHandler = async (
  event: SecretsManagerRotationEvent,
): Promise<void> => {
  console.log(JSON.stringify(event));

  const arn = event.SecretId;
  const token = event.ClientRequestToken;
  const step = event.Step;

  const metadata = await secretsClient.send(
    new DescribeSecretCommand({
      SecretId: arn,
    }),
  );

  if (metadata.RotationEnabled !== true) {
    throw new Error(`Secret ${arn} is not enabled for rotation`);
  }

  const versions = metadata.VersionIdsToStages;
  if (versions) {
    if (token in versions === false) {
      throw new Error(`Secret version ${token} has no stage for rotation of secret ${arn}.`);
    }

    if (versions[token].includes('AWSCURRENT')) {
      throw new Error(`Secret version ${token} already set as AWSCURRENT for secret ${arn}.`);
    } else if (versions[token].includes('AWSPENDING') === false && step !== "createSecret") {
      throw new Error(`Secret version ${token} not set as AWSPENDING for rotation of secret ${arn}.`);
    }
  }

  switch (step) {
    case "createSecret":
      await createSecret(arn, token);
      break;
    case "setSecret":
      await setSecret();
      break;
    case "testSecret":
      await testSecret();
      break;
    case "finishSecret":
      await finishSecret(arn, token);
      break;
    default:
      throw new Error(`Unsupported step "${step}"`);
  }

  return;
}
