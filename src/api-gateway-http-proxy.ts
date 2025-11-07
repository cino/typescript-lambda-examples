/** biome-ignore-all lint/suspicious/useAwait: Supressed to make sure the example is correct */
import type { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { logger } from './common/powertools';

/**
 * Example Typescript lambda to use while using a REST API Gateway
 * and lambda's to build a powerful api.
 */

export const handler: APIGatewayProxyHandler = async (event, context): Promise<APIGatewayProxyResult> => {
  logger.info(JSON.stringify(event));
  logger.info(JSON.stringify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({
      test: true,
    }),
  };
};
