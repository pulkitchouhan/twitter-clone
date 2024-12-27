require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const tweetRoutes = require("./routes/tweets");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", (req, res) => {
  res.json({ success: true, message: "Server running" });
});
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
