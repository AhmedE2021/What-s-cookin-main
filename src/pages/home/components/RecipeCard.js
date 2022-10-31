import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ RecommendRecipe }) {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [time, setTime] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [difficulty, setDifficulty] = useState();
  const [rating, setRating] = useState();
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setId(RecommendRecipe.id);
    setPrice(RecommendRecipe.price);
    setTime(RecommendRecipe.time);
    setImage(RecommendRecipe.image);
    setName(RecommendRecipe.name);
    setDifficulty(RecommendRecipe.difficulty);
    setRating(RecommendRecipe.rating);
    setInstructions(RecommendRecipe.Instructions);
    setIngredients(RecommendRecipe.Ingredients);
  }, [RecommendRecipe]);

  function handleClick() {
    navigate("/InRecipe", {
      state: {
        id: id,
        price: price,
        time: time,
        image: image,
        name: name,
        difficulty: difficulty,
        rating: rating,
        instructions: instructions,
        ingredients: ingredients,
      },
    });
  }

  return (
    <article className="recipecard" onClick={handleClick}>
      <img src={RecommendRecipe.image} alt={RecommendRecipe.name} />
      <div className="over-card-image">
        <span> 🌟</span>
        <p>{RecommendRecipe.rating}</p>
      </div>
      <div className="card-bottom">
        <h2>{RecommendRecipe.name}</h2>
        <div className="card-dtls">
          <p>{RecommendRecipe.price}</p>
          <p>{RecommendRecipe.time}</p>
          <p>{RecommendRecipe.difficulty}</p>
        </div>
      </div>
    </article>
  );
}
