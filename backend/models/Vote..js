import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
  created_by: { type: Schema.Types.ObjectId, ref: "User", required: true },

  title: { type: String, required: true },

  end_date: { type: Date, required: true },

  description: { type: String },

  options: { type: Map, of: Number, required: true },

  created_at: { type: Date, default: Date.now },
});

const Vote = mongoose.model("Vote", VoteSchema);

export default Vote;
