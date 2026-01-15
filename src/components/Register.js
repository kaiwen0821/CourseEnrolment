import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmed", {
      state: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        course: courseRef.current.value
      }
    });
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} required />
        </label>

        <label>
          Email:
          <input type="email" ref={emailRef} required />
        </label>

        <label>
          Course :
          <input type="text" ref={courseRef} required />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
