import {
  APIGatewayProxyEventV2,
  APIGatewayProxyHandlerV2,
  APIGatewayProxyResultV2,
  Context,
} from 'aws-lambda';
import { logger } from './common/powertools';

/**
 * Example Typescript lambda to use while using an HTTP API Gateway
 * and lambda's to build a powerful api.
 */

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2,
  context: Context,
): Promise<APIGatewayProxyResultV2> => {

  logger.info(JSON.stringify(event));
  logger.info(JSON.stringify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({
      'test': true,
    }),
  };
}
