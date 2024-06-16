const express = require("express");
const routes = require("../routes/");

function setupMiddlewares(app) {
  try {
    // Use the routes defined in the routes module
    app.use("/", routes);
  } catch (error) {
    console.error("Error setting up routes:", error);
  }
}

// Export the setupMiddlewares function to be used in other modules
module.exports = { setupMiddlewares };