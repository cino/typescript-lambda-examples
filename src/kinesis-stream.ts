import {
  KinesisStreamBatchResponse,
  KinesisStreamHandler,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: KinesisStreamHandler = async (event): Promise<KinesisStreamBatchResponse | void> => {
  logger.info(JSON.stringify(event));

  const failedRecords: any[] = [];
  // Process records and add to failedRecords if not successful.

  if (failedRecords.length > 0) {
    return {
      batchItemFailures: failedRecords.map((record) => ({ itemIdentifier: record })),
    };
  }

  // if nothing failed, empty response.
  return;
}
