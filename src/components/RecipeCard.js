import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const [id, setId] = useState(recipe.id);
  const [price, setPrice] = useState(recipe.price);
  const [time, setTime] = useState(recipe.time);
  const [instructions, setInstructions] = useState(recipe.Instructions);
  useEffect(() => {
    setId(recipe.id);
    setPrice(recipe.price);
    setTime(recipe.time);
    setInstructions(recipe.Instructions);
  }, [recipe]);

  function handleClick() {
    navigate("/InRecipe", {
      state: {
        id: id,
        price: price,
        time: time,
        instructions: instructions.map((instructions) => (
          <div>{instructions}</div>
        )),
      },
    });
  }

  return (
    <article className="recipecard" onClick={handleClick}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="over-card-image">
        <span> 🌟</span>
        <p>{recipe.rating}</p>
      </div>
      <div className="card-bottom">
        <h2>{recipe.name}</h2>
        <div className="card-dtls">
          <p>{recipe.price}</p>
          <p>{recipe.time}</p>
          <p>{recipe.difficulty}</p>
        </div>
      </div>
    </article>
  );
}
