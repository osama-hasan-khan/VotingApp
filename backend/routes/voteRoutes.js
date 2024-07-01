import express from "express";
import { createVote } from "../controllers/voteController.js";
import { authenticate } from "../middlewares/authorizationMiddleware.js";

const router = express.Router();

router.post("/createVote", authenticate, createVote);

export default router;
