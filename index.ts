import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import * as Logger from './utils/logger.js';

let args = await yargs(hideBin(process.argv))
  .option('log-level', {
    alias: 'l',
    type: 'string',
    description: '',
    default: 'info',
    choices: Logger.LOG_LEVELS,
  })
  .parse();

Logger.setLogLevel(args.logLevel as Logger.LogLevels);

Logger.info('Done');
