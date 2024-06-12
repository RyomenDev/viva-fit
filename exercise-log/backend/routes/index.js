const express = require("express");
const router = express.Router();

const get = require("./get");
const post = require("./post");
const login = require("./login");
const register = require("./register");

router.use(get);
router.use(post);
router.use(login);
router.use(register);

// Export the router object so it can be used in the main app
module.exports = router;
