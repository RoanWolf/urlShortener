import { readFile } from "node:fs/promises";
import { sequelize } from "../utils/dbHelper.js";
import User from "../models/userModel.js";
import UrlRecord from "../models/urlRecordModel.js"
try{
    await sequelize.authenticate();
    await User.sync({ force: true });
    await UrlRecord.sync({force:true})
    const data = await readFile("./src/scripts/data.json", "utf-8");
    const users = JSON.parse(data);
    console.log("Seeding database with users...-----------");
    await User.bulkCreate(users);
    console.log("Database seeded successfully.");

}catch (error) {
    console.error("Error seeding database:", error);
}finally{
    sequelize.close();
}