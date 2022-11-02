import { useNavigate } from "react-router-dom";
export default function AddRecipePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/createRecipeForm");
  }

  return (
    <section className="list-page-wrapper" onClick={handleClick}>
      <h2>Create recipe</h2>
    </section>
  );
}
