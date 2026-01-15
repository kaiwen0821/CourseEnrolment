import { NavLink } from "react-router-dom";

export default function Header() {
  const cls = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <h2>School of Infocomm</h2>
      <nav>
        <NavLink to="/" className={cls}>Home</NavLink>
        <NavLink to="/diplomas" className={cls}>Diplomas</NavLink>
        <NavLink to="/register" className={cls}>Register</NavLink>
        <NavLink to="/favourites" className={cls}>Favourites</NavLink>
        <NavLink to="/faq" className={cls}>FAQ</NavLink>
      </nav>
    </header>
  );
}
