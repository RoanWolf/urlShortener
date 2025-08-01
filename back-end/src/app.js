import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { verifyToken } from "./utils/jwtHelper.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/api", userRoutes);
app.use((req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).json({
      message: "Unauthorization",
    });
  }
  const token = authorization.split(" ")[1];
  verifyToken(token);
  next();
});


export default app;
