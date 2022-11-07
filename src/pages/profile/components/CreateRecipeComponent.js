import { useNavigate } from "react-router-dom";
export default function CreateRecipeCard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/AddRecipePage");
  }
  return (
    <div className="create-recipe-card-outter" onClick={handleClick}>
      <h2 className="creeate-recipe-icon">+</h2>
    </div>
  );
}
