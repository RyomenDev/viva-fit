import React from "react";
import "../css/cards.css";
import EditExerciseForm from "../components/EditExerciseForm";

const Cards = ({
  exercise,
  currentEditId,
  onEditClick,
  onDelete,
  updatedExercise,
  setUpdatedExercise,
  handleEditSubmit,
  handleCancelEdit,
}) => {
  return (
    <div className="card">
      {currentEditId === exercise._id ? (
        <div className="edit-form-container">
          <EditExerciseForm
            exercise={updatedExercise}
            onChange={setUpdatedExercise}
            onSubmit={handleEditSubmit}
            onCancel={handleCancelEdit}
          />
        </div>
      ) : (
        <div className="card-body">
          {/* <div className="card-content"> */}
            <h2 className="card-title">{exercise.name}</h2>
            <p className="card-text">
              <strong>Calories:</strong> {exercise.calories}
            </p>
            <p className="card-text">
              <strong>Date:</strong>{" "}
              {new Date(exercise.date).toLocaleDateString()}
            </p>
            <p className="card-text">
              <strong>Duration:</strong> {exercise.duration} mins
            </p>
            <div className="card-buttons">
              <button
                onClick={() => onEditClick(exercise._id, exercise)}
                className="btn btn-primary"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(exercise._id, exercise.userId)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Cards;
