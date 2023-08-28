import { baseConfig, logLevelConfig } from '../../logging.config';
import pino, { type Logger } from 'pino';

const logLevels = new Map<string, string>(Object.entries(logLevelConfig));

const logger = pino(baseConfig);

export const getLogLevel = (module: string): string | undefined => {
  return logLevels.get(module) || logLevels.get("*");
}

export const getLogger = (module: string): Logger => {
  return logger.child({ module, level: getLogLevel(module) });
}

export default logger;
