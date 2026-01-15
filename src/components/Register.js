import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { getDiplomas } from "../api";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const courseRef = useRef();

  const diplomas = getDiplomas(); // each diploma has {id, name, modules}
  const [selectedCourse, setSelectedCourse] = useState("");

  function submit(e) {
    e.preventDefault();

    if (!selectedCourse) {
      alert("Please select a course.");
      return;
    }

    // set the value in courseRef so it matches your existing logic
    courseRef.current = { value: selectedCourse };

    navigate("/confirmed", {
      state: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        course: selectedCourse
      }
    });
  }

  return (
    <div className="container">
      <h1>Register Interest</h1>

      <form onSubmit={submit}>
        <label>
          Name
          <input ref={nameRef} required />
        </label>

        <label>
          Email
          <input type="email" ref={emailRef} required />
        </label>

        <label>Course</label>
        <div className="course-grid">
          {diplomas.map(d => (
            <div
              key={d.id}
              className={`course-card ${
                selectedCourse === d.name ? "selected" : ""
              }`}
              onClick={() => setSelectedCourse(d.name)}
            >
              {d.name}
            </div>
          ))}
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
