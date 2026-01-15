import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Registration Successful</h1>

      {state && (
        <>
          <p>Thank you, {state.name}.</p>
          <p>
            Your interest in <strong>{state.course}</strong> has been recorded.
          </p>
          <p>Confirmation sent to {state.email}.</p>
        </>
      )}
    </div>
  );
}
