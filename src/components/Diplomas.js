import { NavLink, Outlet } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();

  return (
    <div className="container">
      <h1>Schools</h1>

      <ul className="categories">
        {diplomas.map(d => (
          <li key={d.id}>
            <NavLink
              to={d.id}
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
            >
              {d.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
