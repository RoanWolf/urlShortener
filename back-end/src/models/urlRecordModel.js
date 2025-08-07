import { DataTypes, sequelize } from "../utils/dbHelper.js";

const urlRecord = sequelize.define(
  "urlRecord",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    originalUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique:true,
      validate: {
        isUrl: true, 
      },
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:false
    },
    urlCode: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  },
  {
    tableName: "tb_url",
    updatedAt:false,
    createAt:false
  }
);

export default urlRecord;
