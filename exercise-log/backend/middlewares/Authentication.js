require("dotenv").config();
const jwt = require("jsonwebtoken");

const { JWTSECRETKEY } = process.env;
const jwtSecretKey = JWTSECRETKEY;
// Authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      // const decoded = jwt.verify(token, JWTSECRETKEY);
      // req.user = decoded.userId;
      const { userId, userEmail } = jwt.verify(token, jwtSecretKey);
      req.userId = userId;
        console.log("userId", userId);
        console.log("userEmail", userEmail);
      next();
    } catch (error) {
      console.error("Error verifying token:", error.message);
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized - Missing token" });
  }
}
module.exports = {
  authenticate,
};
