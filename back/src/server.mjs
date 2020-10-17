import * as Sentry from "@sentry/node";
import _debug from "debug";
import http from "http";
import Koa from "koa";

import * as db from "./db.mjs";
import { config } from "./config.mjs";
import uploadsRouter from "./routers/uploads.mjs";

const debug = _debug("app:server");

if (config.sentry.dsn) {
  Sentry.init({
    dsn: config.sentry.dsn,
    tracesSampleRate: config.sentry.tracesSampleRate,
  });
}

const app = new Koa();

[uploadsRouter].forEach((router) =>
  app.use(router.routes()).use(router.allowedMethods())
);

export const server = http.createServer(app.callback());

export const startServer = async ({
  port = config.http.port,

  // Dependency injections
  _app = app,
  _db = db,
  _server = server,
  _Sentry = Sentry,
}) => {
  try {
    _app.context.sequelize = await _db.connect({});

    _server.listen(port, () => debug(`Listening on ${port}`));
  } catch (error) {
    console.error("[server]", error);

    _Sentry.captureException(error);
  }
};
