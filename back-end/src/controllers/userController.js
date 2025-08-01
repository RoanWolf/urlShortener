import {
  createUser as createUserApi,
  hasUsername as hasUsernameApi,
  verifyUser as verifyUserApi,
} from "../services/userService.js";
import { generateToken } from "../utils/jwtHelper.js";
export async function createUser(req, res) {
  const information = req.body;

  try {
    const user = await hasUsernameApi(information.username);
    if (user) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
    await createUserApi(information);
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
    const isUser = await verifyUserApi(username, password);
    if (!isUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(username);
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred." });
  }
}
