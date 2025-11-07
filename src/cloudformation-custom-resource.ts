/** biome-ignore-all lint/suspicious/useAwait: Supressed to make sure the example is correct */
import type { CloudFormationCustomResourceHandler } from 'aws-lambda';
import axios from 'axios';
import { logger } from './common/powertools';

// TODO: Implement handler / add options.
export const handler: CloudFormationCustomResourceHandler = async (event, _context): Promise<void> => {
  logger.info(JSON.stringify(event));

  const data = {
    PhysicalResourceId: '',
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    Data: {},
    Status: 'SUCCESS', // or 'FAILED'
    Reason: '',
  };

  // Send data / response to cfn presigned s3 url.
  await axios.put(event.ResponseURL, JSON.stringify(data));

  // Finish lambda.
  return;
};
