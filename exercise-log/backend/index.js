
const express = require("express");
const cors = require("cors");
// const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
// connectDB().then(() => console.log("Connected to MongoDB"));

// Middleware
app.use(cors());
app.use(express.json());
 
// const routes = require("./routes");
// app.use("/", routes);

const { setupMiddlewares } = require("./middlewares/index");
setupMiddlewares(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
