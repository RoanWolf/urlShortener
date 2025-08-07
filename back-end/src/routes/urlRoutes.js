import { Router } from "express";
import { generalizeShortUrl } from "../controllers/urlController.js";

const router = Router();

router.route("/url").post(generalizeShortUrl)

export default router;