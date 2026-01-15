import { useState } from "react";

export default function Favourites() {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  function removeFavourite(course) {
    const confirmRemove = window.confirm(
      "Are you sure you want to unfavourite this module?"
    );

    if (confirmRemove) {
      const updated = favs.filter(f => f !== course);
      setFavs(updated);
      localStorage.setItem("favs", JSON.stringify(updated));
    }
  }

  return (
    <div className="container">
      <h1>Favourite Modules</h1>

      {favs.length === 0 && <p>No favourites saved.</p>}

      <ul>
        {favs.map((f, index) => (
          <li key={index} className="fav-item">
            {f}
            <button onClick={() => removeFavourite(f)}>
              ❌ Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
