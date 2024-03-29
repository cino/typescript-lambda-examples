import {
  ScheduledHandler
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: ScheduledHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
}
