/** biome-ignore-all lint/suspicious/useAwait: Supressed to make sure the example is correct */
import type { KinesisStreamBatchResponse, KinesisStreamHandler, KinesisStreamRecord } from 'aws-lambda';
import { logger } from './common/powertools';

// biome-ignore lint/suspicious/noConfusingVoidType: this is actually valid as per AWS Lambda types
export const handler: KinesisStreamHandler = async (event): Promise<KinesisStreamBatchResponse | void> => {
  logger.info(JSON.stringify(event));

  const failedRecords: KinesisStreamRecord[] = [];

  for (const record of event.Records) {
    try {
      /**
       * Process records and add to failedRecords if not successful.
       */
      logger.info(`Processing record ID: ${record.eventID}`);
    } catch (error) {
      logger.error(`Error processing record ID: ${record.eventID}, Error: ${(error as Error).message}`);

      if (record.eventID === undefined) {
        logger.error('Record is missing eventID, cannot add to failedRecords.');
        continue;
      }

      failedRecords.push(record);
    }
  }

  if (failedRecords.length > 0) {
    return {
      batchItemFailures: failedRecords.map((record) => ({ itemIdentifier: record.eventID })),
    };
  }

  // if nothing failed, empty response.
  return;
};
