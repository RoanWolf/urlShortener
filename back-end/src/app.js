import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import urlRoutes from "./routes/urlRoutes.js"
import { verifyToken } from "./utils/jwtHelper.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/api", userRoutes);
app.use((req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorization",
    });
  }
  const token = authorization.split(" ")[1];
  try {
    verifyToken(token);
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid token" });
  }
});
app.use("/v1/api",urlRoutes);

export default app;
