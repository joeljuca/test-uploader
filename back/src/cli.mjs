#!/usr/bin/env node

import * as Sentry from "@sentry/node";
import _debug from "debug";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as db from "./db.mjs";
import * as UserSeeder from "./seeders/user.seeder.mjs";
import { startServer } from "./server.mjs";

const debug = _debug("app:cli");

const noop = () => undefined;

yargs(hideBin(process.argv))
  .command("db:setup", "Setup the database", noop, async (argv) => {
    debug("command db:setup");

    try {
      await db.connect({});
      await db.setup({});

      debug("Database set up");
    } catch (error) {
      console.error("[cli]", error);

      Sentry.captureException(error);
    }
  })

  .command("db:seed", "Seed the database", noop, async (argv) => {
    debug("command db:seed");

    try {
      await db.connect({});
      await db.seed({ seeders: [UserSeeder] });

      debug("Database seeded");
    } catch (error) {
      console.error("[cli]", error);

      Sentry.captureException(error);
    }
  })

  .command("db:drop", "Drop the database", noop, async (argv) => {
    debug("command db:drop");

    try {
      await db.drop({});

      debug("Database dropped");
    } catch (error) {
      console.error("[cli]", error);

      Sentry.captureException(error);
    }
  })

  .command("server:start", "Start the server", noop, async (argv) => {
    debug("command server:start");

    try {
      await startServer({});

      debug("Server started");
    } catch (error) {
      console.error("[cli]", error);

      Sentry.captureException(error);
    }
  })

  .demandCommand(1).argv;
