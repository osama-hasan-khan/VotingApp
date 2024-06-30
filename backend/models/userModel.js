import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    userProfilePic: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/139032441?s=400&v=4",
    },
  },

  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
