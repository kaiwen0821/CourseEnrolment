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
          <li className="session" key={m.id}>
            <NavLink
              to={m.id}
              className={({ isActive }) =>
                isActive ? "session-active" : null
              }
            >
              <p className="session-name">{m.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
