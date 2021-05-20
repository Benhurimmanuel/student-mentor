import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function CreateMentorForm() {
  let [mentorName, setMentorName] = useState([]);
  let [mentorSubject, setMentorSubject] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let data = { mentorName, mentorSubject };
      await axios.post("http://localhost:8080/mentor", data);
      alert("done");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <form
        class=" mt-5 offset-3 col-6 form-floating"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class="mb-3">
          <label for="Name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="Name"
            onChange={(e) => setMentorName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="subject" class="form-label">
            Subject
          </label>
          <input
            type="text"
            class="form-control"
            id="subject"
            onChange={(e) => setMentorSubject(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-danger">
          Add Mentor
        </button>
      </form>
    </>
  );
}
export default CreateMentorForm;
