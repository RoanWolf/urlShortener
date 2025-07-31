import User from "../models/userModel.js";
// 注册账号
export async function createUser1(req, res) {
  const information = req.body; // { username, password } username is unique
  try {
    await User.create(information);
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "Username already exists" });
    } else {
      return res.status(500).json({ message: "An error occurred." });
    }
  }
}
export async function createUser(req, res) {
  const information = req.body; // { username, password } username is unique
  try {
    const ok = await User.findOne({
      where: { username: information.username },
    });
    if (ok) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
    await User.create(information);
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred." });
  }
}

