import {
  S3Handler
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: S3Handler = (event): void => {
  logger.info(JSON.stringify(event));

  return;
}
