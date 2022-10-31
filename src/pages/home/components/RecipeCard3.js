import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeCard2({ recipe }) {
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
    setId(recipe.id);
    setPrice(recipe.price);
    setTime(recipe.time);
    setImage(recipe.image);
    setName(recipe.name);
    setDifficulty(recipe.difficulty);
    setRating(recipe.rating);
    setInstructions(recipe.Instructions);
    setIngredients(recipe.Ingredients);
  }, [recipe]);

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
        <article className="recipecard3" onClick={handleClick}>
           
            <img src={recipe.image} alt={recipe.name} />
            <div className="card-bottom3" >
            <h2>{recipe.name}</h2>
            <div className="card-dtls card-dtls3">
                <p>{recipe.price}</p>
                <p>{recipe.time}</p>
                <p>{recipe.difficulty}</p>
                <p>🌟{recipe.rating}</p>
            </div>
            </div>
           
           
        </article>
    );}