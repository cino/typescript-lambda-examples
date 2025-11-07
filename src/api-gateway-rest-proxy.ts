/** biome-ignore-all lint/suspicious/useAwait: Supressed to make sure the example is correct */
import type { APIGatewayProxyHandlerV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { logger } from './common/powertools';

/**
 * Example Typescript lambda to use while using an HTTP API Gateway
 * and lambda's to build a powerful api.
 */

export const handler: APIGatewayProxyHandlerV2 = async (event, context): Promise<APIGatewayProxyResultV2> => {
  logger.info(JSON.stringify(event));
  logger.info(JSON.stringify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({
      test: true,
    }),
  };
};
