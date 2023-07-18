import {
  AutoScalingScaleInEvent,
  AutoScalingScaleInHandler,
  AutoScalingScaleInResult,
  Context,
} from 'aws-lambda';
import { logger } from './common/powertools';

export const handler: AutoScalingScaleInHandler = async (
  event: AutoScalingScaleInEvent,
  context: Context,
): Promise<AutoScalingScaleInResult> => {

  logger.info(JSON.stringify(event));
  logger.info(JSON.stringify(context));

  // Decide which instances to terminate and return the ID's

  return {
    InstanceIDs: [],
  };
}
