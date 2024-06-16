const express = require("express");
const router = express.Router();

const CreateExercise = require("./CreateExercise");
const getAllExercise = require("./GetAllExercise");
const DeleteExercise = require("./DeleteExercise");
const EditExercise = require("./EditExercise");
// const login = require("./login");
// const register = require("./register");

router.use(CreateExercise);
router.use(getAllExercise);
router.use(DeleteExercise);
router.use(EditExercise);
// router.use(login);
// router.use(register);

// Export the router object so it can be used in the main app
module.exports = router;
