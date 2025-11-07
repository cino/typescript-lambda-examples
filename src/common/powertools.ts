import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';

const defaults = {
  region: process.env.AWS_REGION || 'N/A',
  executionEnv: process.env.AWS_EXECUTION_ENV || 'N/A',
};

const logger = new Logger({
  persistentLogAttributes: {
    ...defaults,
    logger: {
      name: 'typescript-lambda-examples',
    },
  },
});

const metrics = new Metrics({
  defaultDimensions: defaults,
});

const tracer = new Tracer();

export { logger, metrics, tracer };
