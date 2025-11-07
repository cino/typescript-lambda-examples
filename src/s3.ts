/** biome-ignore-all lint/suspicious/useAwait: Supressed to make sure the example is correct */
import type { S3Handler } from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: S3Handler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
};
