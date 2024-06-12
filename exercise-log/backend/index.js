const express = require("express");
require("dotenv").config();
const database = require("./config/Database");
const app = express();

// Use the router for the specified base path
const cors = require("cors");
// const router = require("./routes/route");
const {setupMiddlewares} = require("./middlewares/index");

// Middleware
app.use(express.json());
setupMiddlewares(app);

// Enable CORS
app.use(cors());

database.connect();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = 3000;

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
