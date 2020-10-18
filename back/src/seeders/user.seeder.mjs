import _debug from "debug";
import faker from "faker";

import { sequelize } from "../db.mjs";
import { User } from "../models/user.model.mjs";

const debug = _debug("app:seed:user");

export const seed = async ({
  quantity = 100,

  // Dependency injections
  _User = User,
  _sequelize = sequelize,
}) => {
  let count = 0;

  while (count < quantity) {
    const user = {
      email: faker.internet.email(),
    };

    await _User.create(user);
  }

  debug(`${quantity} users seeded`);
};
