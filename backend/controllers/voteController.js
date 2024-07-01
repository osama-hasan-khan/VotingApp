import Vote from "../models/Vote.js";

const createVote = async (req, res) => {
  try {
    const { title, end_date, description, options } = req.body;

    const newVote = new Vote({
      created_by: req.user._id,
      title,
      end_date,
      description,
      options,
    });

    const savedVote = await newVote.save();

    res.status(201).json(savedVote);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in creating vote: ", err.message);
  }
};

const getVotes = async (req, res) => {
  try {
    const votes = await Vote.find();
    res.status(200).json(votes);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in getting votes: ", err.message);
  }
};

const getVoteById = async (req, res) => {
  try {
    const vote = await Vote.findById(req.params.id);

    if (!vote) {
      return res.status(404).json({ error: "Vote not found" });
    }

    res.status(200).json(vote);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error getting vote by ID: ", err.message);
  }
};

const updateVote = async (req, res) => {
  try {
    const { title, end_date, description, options } = req.body;

    const updatedVote = await Vote.findByIdAndUpdate(
      req.params.id,
      {
        title,
        end_date,
        description,
        options,
      },
      { new: true }
    );

    if (!updatedVote) {
      return res.status(404).json({ error: "Vote not found" });
    }

    res.status(200).json(updatedVote);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in updating vote: ", err.message);
  }
};

const deleteVote = async (req, res) => {
  try {
    const deletedVote = await Vote.findByIdAndDelete(req.params.id);

    if (!deletedVote) {
      return res.status(404).json({ error: "Vote not found" });
    }

    res.status(200).json({ message: "Vote deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in deleting vote: ", err.message);
  }
};

export { createVote, getVotes, updateVote, getVoteById, deleteVote };
