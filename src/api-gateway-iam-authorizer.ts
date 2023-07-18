import {
  APIGatewayRequestAuthorizerEventV2,
  APIGatewayRequestIAMAuthorizerHandlerV2,
  APIGatewayIAMAuthorizerResult,
  Context,
} from 'aws-lambda';
import { logger } from './common/powertools';

/**
 * Example Typescript lambda to use while using an HTTP API Gateway
 * and lambda's to build a powerful api.
 */

export const handler: APIGatewayRequestIAMAuthorizerHandlerV2 = async (
  event: APIGatewayRequestAuthorizerEventV2,
  context: Context,
): Promise<APIGatewayIAMAuthorizerResult> => {

  logger.info(JSON.stringify(event));
  logger.info(JSON.stringify(context));

  return {
    principalId: 'user',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [],
    },
  };
}
