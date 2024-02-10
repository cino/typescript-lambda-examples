import {
  SNSHandler
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: SNSHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
}
