import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard2({ recipe }) {
  const navigate = useNavigate();

  const [id, setId] = useState(recipe.id);
  const [price, setPrice] = useState(recipe.price);
  const [time, setTime] = useState(recipe.time);
  useEffect(() => {
    setId(recipe.id);
    setPrice(recipe.price);
    setTime(recipe.time);
  }, [recipe]);

  function handleClick() {
    navigate("/InRecipe", {
      state: {
        id: id,
        price: price,
        time: time,
      },
    });
  }
  return (
    <article className="recipecard2" onClick={handleClick}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="card-bottom2">
        <h2>{recipe.name}</h2>
        <div className="card-dtls card-dtls2">
          <p>{recipe.price}</p>
          <p>{recipe.time}</p>
          <p>{recipe.difficulty}</p>
        </div>
      </div>
    </article>
  );
}
