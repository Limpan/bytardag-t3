import { type LoggerOptions } from "pino"

export const baseConfig: LoggerOptions = {
  enabled: process.env.NODE_ENV !== "test",
  name: "bytardag",
  level: "trace",
  base: {
    env: process.env.NODE_ENV
  }
}

export const logLevelConfig: Record<string, string> = {
  "*": "debug",
  "router": "trace",
}
