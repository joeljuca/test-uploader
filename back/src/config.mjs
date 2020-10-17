import _debug from "debug";
import path from "path";

const debug = _debug("_app:config");

export const config = {
  db: process.env.BACK_DATABASE_CONFIG
    ? JSON.parse(process.env.BACK_DATABASE_CONFIG)
    : {
        dialect: "sqlite",
        storage: path.resolve(".database.sqlite"),
      },

  debug: Boolean(process.env.BACK_DEBUG),

  http: {
    port: parseInt(process.env.BACK_HTTP_PORT) || 8080,
  },

  sentry: {
    dsn: process.env.BACK_SENTRY_DSN,
    tracesSampleRate:
      parseFloat(process.env.BACK_SENTRY_TRACES_SAMPLE_RATE) || 1.0,
  },
};

debug(config);
