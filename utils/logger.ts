import chalk from 'chalk';

export const LOG_LEVEL = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
} as const;

export type LogLevels = keyof typeof LOG_LEVEL;
export const LOG_LEVELS = Object.keys(LOG_LEVEL) as Array<LogLevels>;

let logLevel: typeof LOG_LEVEL[LogLevels] = LOG_LEVEL.info;

export function setLogLevel(level: LogLevels) {
  logLevel = LOG_LEVEL[level];
}

export function debug(...msg: Array<unknown>) {
  if (logLevel > LOG_LEVEL.debug) {
    return;
  }
  console.log(`${chalk.gray('DEBUG')}: ${msg}`);
}

export function info(...msg: Array<unknown>) {
  if (logLevel > LOG_LEVEL.info) {
    return;
  }
  console.log(`${chalk.greenBright('INFO')}: ${msg}`);
}

export function warn(...msg: Array<unknown>) {
  if (logLevel > LOG_LEVEL.warn) {
    return;
  }
  console.warn(`${chalk.yellowBright('WARNING')}: ${msg}`);
}

export function error(...msg: Array<unknown>) {
  if (logLevel > LOG_LEVEL.error) {
    return;
  }
  console.error(`${chalk.redBright('ERROR')}: ${msg}`);
}

export function raw(level: LogLevels, ...msg: Array<unknown>) {
  if (logLevel > LOG_LEVEL[level]) {
    return;
  }
  console.log(msg);
}
