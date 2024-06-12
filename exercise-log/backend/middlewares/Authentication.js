require("dotenv").config();
const { JWTSECRETKEY } = process.env;
const jwtSecretKey = JWTSECRETKEY;
// Authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, JWTSECRETKEY);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "Missing token" });
  }
}
module.exports = {
  authenticate,
};
