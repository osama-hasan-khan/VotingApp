import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dataBaseConnection from "./config/db.js";
import config from "./config/config.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";

dataBaseConnection();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth/users", userRouter);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

export default app;
