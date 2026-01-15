import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  return (
    <>
      <h2>{diploma.name} Modules</h2>

      <ul className="session-list">
        {diploma.modules.map(m => (
          <li key={m.id} className="session">
            <NavLink to={m.id}>
              {m.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
