import { DataTypes, sequelize } from "../utils/dbHelper.js";

const UrlRecord = sequelize.define(
  "UrlRecord",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    originURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "tb_url",
  }
);

export default UrlRecord;
