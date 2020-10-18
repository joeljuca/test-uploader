import Sequelize from "sequelize";

export class User extends Sequelize.Model {
  static async setup({ sequelize }) {
    const schema = {
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    };

    User.init(schema, { sequelize, modelName: "User" });
  }
}
