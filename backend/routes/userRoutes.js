import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
  userProfile,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authorizationMiddleware.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", authenticate, userProfile);

export default router;
