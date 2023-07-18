import {
  EventBridgeHandler
} from 'aws-lambda';
import { logger } from './common/powertools';

/**
 * Example Typescript lambda to use while using Event Bridge while
 * using the correct typing which will give you an enjoyable
 * development experience in your IDE.
 */

interface ExampleEvent {
  username: string,
  email: string,
  extra: string,
  data: string,
}

interface ExampleResult {
  test: string;
}

export const handler: EventBridgeHandler<'custom', ExampleEvent, ExampleResult> = (
  event,
): void => {
  logger.info(JSON.stringify(event));

  return;
}
