import {
  SQSHandler
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: SQSHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
}
