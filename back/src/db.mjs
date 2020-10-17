import _debug from "debug";
import Sequelize from "sequelize";

import { config } from "./config.mjs";
import { Upload } from "./models/upload.mjs";

const debug = _debug("app:db");

export const sequelize = new Sequelize(config.db);

export const connect = async ({
  // Dependency injections
  _models = [Upload],
  _sequelize = sequelize,
}) => {
  await _sequelize.authenticate();
  debug("Database connected");

  await Promise.all(
    _models.map((Model) => Model.setup({ sequelize: _sequelize }))
  );
  debug("Sequelize models set up");

  return sequelize;
};

export const disconnect = async ({
  // Dependency injections
  _sequelize = sequelize,
}) => {
  await _sequelize.close();
  debug("Database disconnected");

  return _sequelize;
};

export const setup = async ({
  // Dependency injections
  _sequelize = sequelize,
}) => {
  _sequelize.sync();
  debug("Database models synchronized");

  return sequelize;
};
