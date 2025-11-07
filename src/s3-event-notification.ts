import type { S3NotificationEventBridgeHandler } from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: S3NotificationEventBridgeHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
};
