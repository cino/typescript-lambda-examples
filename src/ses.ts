import {
  SESHandler
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: SESHandler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
}
