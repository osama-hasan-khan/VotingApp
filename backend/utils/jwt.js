import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: config.NODE_ENV !== "development",
    sameSite: "none",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateToken;
