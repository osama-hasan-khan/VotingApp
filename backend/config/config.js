import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 4242,

  mongoURI:
    process.env.MONGO_URI ||
    "mongodb+srv://khan:123@vote-app.w1asu54.mongodb.net/?retryWrites=true&w=majority&appName=vote-app",

  jwtSecret:
    process.env.JWT_SECRET ||
    "3f9dce2f1eab6d7e8f5c7a0e4c2d1b3a5f9c6b7d8e1f2a3c5b6d7e8f9c0a1b2c",

  NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;
