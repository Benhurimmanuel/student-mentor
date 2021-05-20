import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function StudentAssignment(props) {
  let [mentorId, setMentorID] = useState("");
  let [studentID, setStudentID] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let data = { mentorId, studentID };
    axios.put("http://localhost:8080/mentor/:id", data);
    alert("done");
  }
  return (
    <>
      <form
        class=" mt-5 offset-3 col-6 form-floating"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class="mb-3">
          <label for="Mentor ID" class="form-label">
            Mentor ID
          </label>
          <input
            type="text"
            class="form-control"
            id="Mentor ID"
            onChange={(e) => setMentorID(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for=" Student ID" class="form-label">
            Student ID to Assign for mentor
          </label>
          <input
            type="text"
            class="form-control"
            id=" Student ID"
            onChange={(e) => setStudentID(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-danger">
          Assign Student to mentor
        </button>
      </form>
    </>
  );
}
export default StudentAssignment;
