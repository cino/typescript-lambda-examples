import {
  CloudFrontResponseHandler,
  CloudFrontResponseResult
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: CloudFrontResponseHandler = async (event): Promise<CloudFrontResponseResult> => {
  logger.info(JSON.stringify(event));

  // when you would like to allow the response to pass through and not modify it
  return null;

  // when you would like to modify the response
  return {
    status: '200',
    statusDescription: 'OK',
    headers: {
      'cache-control': [
        {
          key: 'Cache-Control',
          value: 'max-age=100'
        }
      ]
    }
  }
}
