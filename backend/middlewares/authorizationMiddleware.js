import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import config from "../config/config.js";

const authenticate = async (req, res, next) => {
  let token = req.cookies.jwt;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  if (token) {
    try {
      const decoded = jwt.decode(token, config.jwtSecret);
      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token.");
  }
};

export { authenticate };
