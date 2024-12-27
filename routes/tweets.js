const express = require("express");
const Tweet = require("../models/Tweet");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Create Tweet
router.post("/", authMiddleware, async (req, res) => {
  const { content } = req.body;
  try {
    const tweet = new Tweet({ user: req.user.id, content });
    await tweet.save();
    res.json(tweet);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Tweets
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tweets = await Tweet.find().populate("user", "username").sort({ createdAt: -1 });
    res.json(tweets);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
