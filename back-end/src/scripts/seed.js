import { readFile } from "node:fs/promises";
import { sequelize } from "../utils/dbHelper.js";

import User from "../models/userModel.js";
import urlRecord from "../models/urlRecordModel.js";
import encryptData from "../utils/hashHelper.js";
try {
    
  await sequelize.authenticate();
  await User.sync({ force: true });
  await urlRecord.sync({ force: true });

  const data = await readFile("./src/scripts/data.json", "utf-8");
  const users = JSON.parse(data);

  const encryptUsers = await encryptData(users);
  
  await User.bulkCreate(encryptUsers);
  console.log("Database seeded successfully.");

} catch (error) {
  console.error("Error seeding database:", error);
} finally {
  sequelize.close();
}
