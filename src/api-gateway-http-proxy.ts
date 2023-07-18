import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { logger } from './common/powertools';

/**
 * Example Typescript lambda to use while using a REST API Gateway
 * and lambda's to build a powerful api.
 */

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {

  logger.info(JSON.stringify(event));
  logger.info(JSON.stringify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({
      'test': true,
    }),
  };
}
