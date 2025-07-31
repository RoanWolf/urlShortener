import User from "../models/userModel.js";

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

export async function verifyUser(req, res) {
  const { username, password } = req.body;
    try {
        const user = await User.findOne({
        where: { username, password },
        });
        if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
        }
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred." });
    }
}
