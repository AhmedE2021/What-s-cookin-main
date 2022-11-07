

////////Ahmed///////
////KALOYAN////
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeCard3({ recipe }) {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setId(recipe.id);
    setInstructions(recipe.Instructions);
    setIngredients(recipe.Ingredients);
  }, [recipe]);

  function handleClick() {
    navigate("/InRecipe", {
      state: {
        id: id,
        price: recipe.price,
        time: recipe.time,
        image: recipe.image,
        name: recipe.name,
        difficulty: recipe.difficulty,
        rating: recipe.rating,
        instructions: instructions,
        ingredients: ingredients,
      },
    });
  }

  return (
    <article className="recipecard3" onClick={handleClick}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="card-bottom3">
        <h2>{recipe.name}</h2>
        <div className="card-dtls card-dtls3">
          <p>{recipe.price}</p>
          <p>{recipe.time}</p>
          <p>{recipe.difficulty}</p>
          <p>🌟{recipe.rating}</p>
        </div>
      </div>
    </article>
  );
}
