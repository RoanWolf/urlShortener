import User from "../models/userModel.js";

export async function createUser(req, res) {
  const information = req.body;
  try {
    await User.create(information);
    return res.status(201).json({
      message: "User created successfully"
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res
        .status(400)
        .json({ message: "Name must be unique. This name is already taken." });
    } else {
      res.status(500).json({ message: "An error occurred." });
    }
  }
}

export async function getUserByUsernamer(req, res) {}
