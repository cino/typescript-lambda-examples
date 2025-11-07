/** biome-ignore-all lint/suspicious/useAwait: Supressed to make sure the example is correct */
import type { CloudWatchLogsHandler } from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: CloudWatchLogsHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
};
