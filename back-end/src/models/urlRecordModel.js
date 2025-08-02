import { DataTypes, sequelize } from "../utils/dbHelper.js";

const UrlRecord = sequelize.define(
  "UrlRecord",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    urlLong: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    optionCustom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "tb_url",
    updatedAt: false,
    createdAt: false,
  }
);

export default UrlRecord;
