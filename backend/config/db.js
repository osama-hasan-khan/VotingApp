import mongoose from "mongoose";
import config from "./config.js";

const dataBaseConnection = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default dataBaseConnection;
