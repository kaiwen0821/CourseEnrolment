import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();
  const [search, setSearch] = useState("");

  const filtered = diplomas.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Courses</h1>

      <input
        placeholder="Search course..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul className="categories">
        {filtered.map(d => (
          <li key={d.id}>
            <NavLink to={d.id}>
              <strong>{d.name}</strong>
              <p>{d.description}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
