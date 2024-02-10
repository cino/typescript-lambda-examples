import {
  CloudFrontRequestHandler,
  CloudFrontRequestResult
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: CloudFrontRequestHandler = async (event): Promise<CloudFrontRequestResult> => {
  logger.info(JSON.stringify(event));


  // when you would like to allow the request to pass through and not modify it
  return null;

  // when you would like to modify the request
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
