require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes"); // ✅ added

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ connect routes
app.use("/api/auth", authRoutes);

// simple route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });

  })
  .catch(err => {
    console.log("❌ DB Error:", err);
  });