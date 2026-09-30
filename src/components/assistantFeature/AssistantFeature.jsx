import { Link } from "react-router-dom";
import "./AssistantFeature.css";

function AssistantFeature({ title, description, to }) {
  return (
    <Link to={to} className="assistantFeature">
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default AssistantFeature;
