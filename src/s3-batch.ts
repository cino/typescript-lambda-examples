import {
  S3BatchHandler, S3BatchResult
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: S3BatchHandler = async (event): Promise<S3BatchResult> => {
  logger.info(JSON.stringify(event));

  return {
    invocationSchemaVersion: '1.0',
    treatMissingKeysAs: 'PermanentFailure', // or 'TemporaryFailure' or 'Succeeded'
    invocationId: '123',
    results: [
      {
        taskId: 'task1',
        resultCode: 'Succeeded',
        resultString: 'Processed successfully'
      }
    ]
  }
}
