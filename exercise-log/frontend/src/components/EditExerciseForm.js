import React from "react";

// Utility function to format a date in YYYY-MM-DD format
const formatDate = (date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const EditExerciseForm = ({ exercise, onChange, onSubmit, onCancel }) => {
  const handleChange = (e) => {
    onChange({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <h2>Edit Exercise</h2> */}
        <div>
          <label htmlFor="edit-name">Exercise Name:</label>
          <input
            id="edit-name"
            type="text"
            value={exercise.name}
            onChange={(e) => onChange({ ...exercise, name: e.target.value })}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="edit-calories">Calories Burned:</label>
          <input
            id="edit-calories"
            type="number"
            value={exercise.calories}
            onChange={(e) =>
              onChange({ ...exercise, calories: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="edit-date">Date:</label>
          <input
            id="edit-date"
            type="date"
            // value={exercise.date}
            value={formatDate(exercise.date)}
            onChange={(e) => onChange({ ...exercise, date: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="edit-duration">Duration (in minutes):</label>
          <input
            id="edit-duration"
            type="number"
            value={exercise.duration}
            onChange={(e) =>
              onChange({ ...exercise, duration: Number(e.target.value) })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SAVE
        </button>
        <button type="button" className="btn btn-danger" onClick={onCancel}>
          CANCEL
        </button>
      </form>
    </div>
  );
};

export default EditExerciseForm;
