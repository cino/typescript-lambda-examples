/** biome-ignore-all lint/suspicious/useAwait: Supressed to make sure the example is correct */
import type { ScheduledHandler } from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: ScheduledHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
};
