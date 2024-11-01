import {
  ALBHandler,
  ALBResult,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: ALBHandler = async (event): Promise<ALBResult> => {
  logger.info(JSON.stringify(event));

  return {
    statusCode: 200,
    statusDescription: 'Ok',
    body: JSON.stringify({
      test: 'ok',
    }),
  };
}
