import { Router } from "express";
import { createUser,verifyUser } from "../controllers/userController.js";

const router = Router();
router.route("/register").post(createUser);
router.route("/login").post(verifyUser);
export default router;
