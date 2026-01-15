import { useLocation, useNavigate } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    // Redirect to home if someone opens page directly
    navigate("/");
    return null;
  }

  return (
    <div className="container">
      <div className="confirmation-card">
        <h2>🎉 Registration Successful!</h2>
        <p>
          Thank you <strong>{state.name}</strong> for registering your interest.
        </p>
        <p>
          <strong>Course:</strong> {state.course}
        </p>
        <p>
          A confirmation email has been sent to <strong>{state.email}</strong>.
        </p>

        <button className="btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
