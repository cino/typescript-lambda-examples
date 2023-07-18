import {
  CdkCustomResourceEvent,
  CdkCustomResourceHandler,
  CdkCustomResourceResponse,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: CdkCustomResourceHandler = async (
  event: CdkCustomResourceEvent,
): Promise<CdkCustomResourceResponse> => {
  logger.info(JSON.stringify(event));

  return {
    PhysicalResourceId: '',
    Data: {},
  };
}
