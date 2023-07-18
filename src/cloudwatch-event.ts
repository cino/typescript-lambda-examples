import {
  ScheduledEvent, ScheduledHandler
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: ScheduledHandler = (
  event: ScheduledEvent,
): void => {
  logger.info(JSON.stringify(event));

  return;
}
