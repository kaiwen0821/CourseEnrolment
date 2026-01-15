import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { diplomaId, moduleId } = useParams();
  const module = getModule({ diplomaId, moduleId });

  function addFavourite() {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    if (!favs.includes(module.name)) {
      localStorage.setItem("favs", JSON.stringify([...favs, module.name]));
      alert("Added to favourites");
    }
  }

  return (
    <>
      <h3>{module.name}</h3>
      <p>{module.description}</p>
      <p><strong>Credits:</strong> {module.credits}</p>
      <button onClick={addFavourite}>❤️ Favourite</button>
    </>
  );
}
