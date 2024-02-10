import {
  DynamoDBBatchResponse,
  DynamoDBStreamHandler,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: DynamoDBStreamHandler = async (event): Promise<DynamoDBBatchResponse | void> => {
  logger.info(JSON.stringify(event));

  const failedRecords = [];
  // Process records and add to failedRecords if not successful.

  if (failedRecords.length > 0) {
    return {
      batchItemFailures: failedRecords.map((record) => ({ itemIdentifier: record })),
    };
  }

  // if nothing failed, empty response.
  return;
}
