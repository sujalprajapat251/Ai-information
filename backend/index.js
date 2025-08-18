require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { connectDb } = require("./db/db");
const indexRoute = require("./routes/index"); 

const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", indexRoute);
app.use("/public", express.static(path.join(__dirname, "public")));

// Start server
app.listen(port, async () => {
  await connectDb();
  console.log(`🚀 Server running on http://localhost:${port}`);
});
