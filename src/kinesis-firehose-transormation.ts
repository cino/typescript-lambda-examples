import {
  FirehoseTransformationResult,
  FirehoseTransformationHandler,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: FirehoseTransformationHandler = async (event): Promise<FirehoseTransformationResult> => {
  logger.info(JSON.stringify(event));

  return {
    records: event.records.map((record) => ({
      recordId: record.recordId,
      result: 'Ok', // 'Ok' or 'Dropped' or 'ProcessingFailed'
      data: record.data,
    })),
  }
}
