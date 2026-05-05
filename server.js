const express = require("express");
const cors = require("cors");

const connectDB = require("./configure/db");

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", require("./routes/books"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});