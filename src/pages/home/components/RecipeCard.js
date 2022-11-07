


////////Ahmed////////
////KALOYAN////
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeCard({ RecommendRecipe }) {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  //USING THE "useEffect()" as little as possible
  //PASSING ONLY THE necessary VALUES (for example arrays so we can use a method for them) ///Kaloyan///
  
  useEffect(() => {
    setId(RecommendRecipe.id);
    setInstructions(RecommendRecipe.Instructions);
    setIngredients(RecommendRecipe.Ingredients);
  }, [RecommendRecipe]);

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
        price: RecommendRecipe.price,
        time: RecommendRecipe.time,
        image: RecommendRecipe.image,
        name: RecommendRecipe.name,
        difficulty: RecommendRecipe.difficulty,
        rating: RecommendRecipe.rating,
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

