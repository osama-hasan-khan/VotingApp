import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  test: { type: String, required: true },

  send_by: { type: Schema.Types.ObjectId, ref: "User", required: true },

  vote_id: { type: Schema.Types.ObjectId, ref: "Vote", required: true },

  created_at: { type: Date, default: Date.now },

  is_edit: { type: Boolean, default: false },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
