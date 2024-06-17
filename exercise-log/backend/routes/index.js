const express = require("express");
const router = express.Router();

const CreateExercise = require("./CreateExercise");
const getAllExercise = require("./GetAllExercise");
const DeleteExercise = require("./DeleteExercise");
const EditExercise = require("./EditExercise");
const register = require("./register");
const login = require("./login");

router.use(CreateExercise);
router.use(getAllExercise);
router.use(DeleteExercise);
router.use(EditExercise);
router.use(register);
router.use(login);

// Export the router object so it can be used in the main app
module.exports = router;
