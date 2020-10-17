import Sequelize from "sequelize";

export class Upload extends Sequelize.Model {
  static async setup({ sequelize }) {
    Upload.init(
      {
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        size: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        md5: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: Sequelize.DataTypes.BLOB,
          allowNull: false,
        },
      },
      { sequelize, modelName: "Upload" }
    );
  }
}
