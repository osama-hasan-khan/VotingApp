import express from "express";
import {
  createVote,
  deleteVote,
  getVoteById,
  getVotes,
  updateVote,
} from "../controllers/voteController.js";
import { authenticate } from "../middlewares/authorizationMiddleware.js";

const router = express.Router();

router.post("/createVote", authenticate, createVote);
router.get("/getVotes", authenticate, getVotes);
router.get("/getVoteById/:id", authenticate, getVoteById);
router.put("/updateVote/:id", authenticate, updateVote);
router.delete("/deleteVote/:id", authenticate, deleteVote);

export default router;
