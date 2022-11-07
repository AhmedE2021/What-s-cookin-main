


////////Ahmed///////
////KALOYAN////

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeCard2({ CheapestRecipe }) {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  
  //USE THE "useEffect" as little as possible, thus we improve app performance
  useEffect(() => {
    setId(CheapestRecipe.id);
    setInstructions(CheapestRecipe.Instructions);
    setIngredients(CheapestRecipe.Ingredients);
  }, [CheapestRecipe]);

  // function handleClick() {
  //   navigate("/InRecipe", {
  //     state: {
  //       id: id,
  //       price: price,
  //       time: time,
  //       image: image,
  //       name: name,
  //       difficulty: difficulty,
  //       rating: rating,
  //       instructions: instructions,
  //       ingredients: ingredients,
  //     },
  //   });
  // }

  function handleClick() {
    navigate("/InRecipe", {
      state: {
        id: id,
        price: CheapestRecipe.price,
        time: CheapestRecipe.time,
        image: CheapestRecipe.image,
        name: CheapestRecipe.name,
        difficulty: CheapestRecipe.difficulty,
        rating: CheapestRecipe.rating,
        instructions: instructions,
        ingredients: ingredients,
      },
    });
  }

  return (
    <article className="recipecard2" onClick={handleClick}>
      <img src={CheapestRecipe.image} alt={CheapestRecipe.name} />
      <div className="card-bottom2">
        <h2>{CheapestRecipe.name}</h2>
        <div className="card-dtls card-dtls2">
          <p>{CheapestRecipe.price}</p>
          <p>{CheapestRecipe.time}</p>
          <p>{CheapestRecipe.difficulty}</p>
        </div>
      </div>
    </article>
  );
}

