import React, { useEffect } from "react";
import "../styles/UserInputForm.css";

const UserInputForm = () => {
  useEffect(() => {
    const handleSubmit = (event) => {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const gender = document.getElementById("gender").value;

      if (!name || !age || !gender) {
        alert("Please fill in all required fields.");
        event.preventDefault();
      }
    };

    const form = document.getElementById("mealForm");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div>
      <section>
        <h2>Enter Your Dietary Requirements and Goals</h2>
        <form id="mealForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />

          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
          <textarea
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            rows="3"
          ></textarea>

          <label htmlFor="dietaryGoals">Dietary Goals:</label>
          <textarea id="dietaryGoals" name="dietaryGoals" rows="3"></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default UserInputForm;
