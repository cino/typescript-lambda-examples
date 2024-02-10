import {
  CdkCustomResourceHandler,
  CdkCustomResourceResponse,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: CdkCustomResourceHandler = async (event): Promise<CdkCustomResourceResponse> => {
  logger.info(JSON.stringify(event));

  return {
    PhysicalResourceId: '',
    Data: {},
  };
}
