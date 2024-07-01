import Vote from "../models/Vote.js"

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

export { createVote };
