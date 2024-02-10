import {
  CloudWatchLogsHandler,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: CloudWatchLogsHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
}
