import dotenv, { config } from "dotenv";

dotenv.config();

export const port = process.env.PORT || 5000;
export const mongoURI =
  process.env.MONGO_URI ||
  "mongodb+srv://khan:123@voting-app.txhfob3.mongodb.net/?retryWrites=true&w=majority&appName=voting-app";

export default config;
