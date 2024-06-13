const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGODB_URL, DB_NAME } = process.env;

const dbConnect = async () => {
  try {
    const client = new MongoClient(MONGODB_URL);

    await client.connect();
    console.log("Connected to the database");
    const db = client.db(DB_NAME);
    return db;
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw error;
  }
};

// const connect = () => {
//   mongoose
//     .connect(MONGODB_URL)
//     .then(() => console.log(`DB Connection Success`)) // !Promise
//     .catch((err) => {
//       console.log(`DB Connection Failed`);
//       console.log(err);
//       process.exit(1);
//     });
// };

module.exports = { dbConnect };
