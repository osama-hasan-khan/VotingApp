import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dataBaseConnection from "./config/db.js";
import config from "./config/config.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

dataBaseConnection();

export default app;
