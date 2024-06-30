import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "../utils/jwt.js";

const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userAlreadyExist = await UserModel.findOne({ email });

    if (userAlreadyExist) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      jwt(res, newUser._id);
      res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        userProfilePic: newUser.userProfilePic,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in signupUser: ", err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!user || !correctPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    jwt(res, user._id);

    res.status(200).json({
      _id: user._id,
      email: user.email,
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in signupUser: ", err.message);
  }
};

export { signupUser, loginUser };
