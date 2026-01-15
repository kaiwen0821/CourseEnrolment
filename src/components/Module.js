import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { diplomaId, moduleId } = useParams();
  const { name, description, credits } = getModule({ diplomaId, moduleId });

  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Credits:</strong> {credits}</p>
    </>
  );
}
