// import "../css/exerciseCard.css";
import React, { useState } from "react";
import axios from "axios";
// import EditExerciseForm from "../components//EditExerciseForm";
import Cards from "../components/Cards";

const ExerciseList = ({ exercises, setExercises, onDelete, userId }) => {
  const [currentEditId, setCurrentEditId] = useState(null);
  const [updatedExercise, setUpdatedExercise] = useState({
    name: "",
    calories: 0,
    date: "",
    duration: 0,
  });

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (token) {
        // User is logged in, perform authenticated update
        const response = await axios.put(
          `${process.env.REACT_APP_BASE_URL}/exercises/${currentEditId}`,
          updatedExercise,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              loggedInUserId: userId,
            },
          }
        );

        // Update the state directly with the updated exercise
        setExercises((prevExercises) =>
          prevExercises.map((exercise) =>
            exercise._id === currentEditId ? response.data : exercise
          )
        );
      } else {
        // No token found, editing dummy exercise locally
        setExercises((prevExercises) =>
          prevExercises.map((exercise) =>
            exercise._id === currentEditId ? updatedExercise : exercise
          )
        );
      }

      setCurrentEditId(null); // Clear current edit ID
    } catch (error) {
      console.error("Error updating exercise:", error);
    }
  };

  const handleEditClick = (id, exercise) => {
    setCurrentEditId(id);
    setUpdatedExercise({ ...exercise });
  };

  const handleCancelEdit = () => {
    setCurrentEditId(null);
  };

  //
  return (
    <div className="container">
      <h1>Exercise List</h1>
      <div className="card-grid">
        {exercises.map((exercise) => (
          <Cards
            key={exercise._id}
            exercise={exercise}
            currentEditId={currentEditId}
            onEditClick={handleEditClick}
            onDelete={onDelete}
            updatedExercise={updatedExercise}
            setUpdatedExercise={setUpdatedExercise}
            handleEditSubmit={handleEditSubmit}
            handleCancelEdit={handleCancelEdit}
          />
        ))}
      </div>
    </div>
    // <div className="container">
    //   <h1>Exercise List</h1>
    //   <div className="card-grid">
    //     {exercises.map((exercise) => (
    //       <div key={exercise._id} className="card">
    //         {" "}
    //         {/* Ensure the key prop is set to a unique value */}
    //         {currentEditId === exercise._id ? (
    //           <div className="edit-form-container">
    //             <EditExerciseForm
    //               exercise={updatedExercise}
    //               onChange={setUpdatedExercise}
    //               onSubmit={handleEditSubmit}
    //               onCancel={handleCancelEdit}
    //             />
    //           </div>
    //         ) : (
    //           <div className="card-body">
    //             <h2 className="card-title">{exercise.name}</h2>
    //             <p className="card-text">
    //               <strong>Calories:</strong> {exercise.calories}
    //             </p>
    //             <p className="card-text">
    //               <strong>Date:</strong>{" "}
    //               {new Date(exercise.date).toLocaleDateString()}
    //             </p>
    //             <p className="card-text">
    //               <strong>Duration:</strong> {exercise.duration} mins
    //             </p>
    //             <div className="card-buttons">
    //               <button
    //                 onClick={() => handleEditClick(exercise._id, exercise)}
    //                 className="btn btn-primary"
    //               >
    //                 Edit
    //               </button>
    //               <button
    //                 onClick={() => onDelete(exercise._id, exercise.userId)}
    //                 className="btn btn-danger"
    //               >
    //                 Delete
    //               </button>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ExerciseList;

// const handleEditSubmit = async (e) => {
//   e.preventDefault();
//   console.log("update Data Frontend:", updatedExercise);
//   try {
//     const response = await axios.put(
//       `${process.env.REACT_APP_BASE_URL}/exercises/${currentEditId}`,
//       updatedExercise
//     );
//     console.log("Updated exercise: Frontend", response.data);

//     // Fetch the updated list of exercises
//     const updatedExercisesResponse = await axios.get(
//       `${process.env.REACT_APP_BASE_URL}/exercises`
//     );
//     setExercises(updatedExercisesResponse.data);
//   } catch (error) {
//     console.error("Error updating exercise:", error);
//   }
// };

/*
  return (
    <div className="container">
      <h1>Exercise List</h1>
      <div className="card-grid">
        {exercises.map((exercise) => (
          <div
            key={exercise._id}
            className={`card ${
              currentEditId === exercise._id ? "expanded" : ""
            }`}
          >
            <div className="card-body">
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
                  //   onClick={() => editExercise(exercise._id, exercise)}
                  onClick={() => handleEditClick(exercise._id, exercise)}
                  className="btn btn-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(exercise._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
            {isEditing && currentEditId === exercise._id && (
              <div className="edit-form-container">
                <EditExerciseForm
                  exercise={updatedExercise}
                  onChange={setUpdatedExercise}
                  onSubmit={handleEditSubmit}
                  onCancel={handleCancelEdit}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
*/
