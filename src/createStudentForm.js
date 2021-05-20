import React from "react";
import { useState } from "react";
import axios from 'axios'

function CreateStudentForm() {
  let [studentName, setStudentName] = useState([]);
  let [studentAge, setStudentAge] = useState([]);
 async function handleSubmit(e) {
    e.preventDefault();
   try{
    let data={ studentName, studentAge}
  
    await axios.post("http://localhost:8080/student",data);
    alert("done")
    
   }catch(err){
     alert(err)
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
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">
            Age
          </label>
          <input
            type="text"
            class="form-control"
            id="age"
            onChange={(e) => setStudentAge(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-danger">
          Add Student
        </button>
      </form>
    </>
  );
}
export default CreateStudentForm;
