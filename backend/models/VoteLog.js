import mongoose from "mongoose";

const VoteLogSchema = new mongoose.Schema({
  vote_id: { type: Schema.Types.ObjectId, ref: "Vote", required: true },

  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },

  option: { type: String, required: true },

  created_at: { type: Date, default: Date.now },
});

const VoteLog = mongoose.model("VoteLog", VoteLogSchema);

export default VoteLog;
