import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

export default function MyRecipeCard({ recipe }) {
  const deleteRecipe = async (id) => {
    const recipeDoc = doc(db, "myRecipes", id);
    await deleteDoc(recipeDoc);
  };

  const [id, setId] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setId(recipe.id);
    setInstructions(recipe.Instructions);
    setIngredients(recipe.Ingredients);
  }, [recipe]);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/InRecipe", {
      state: {
        id: id,
        price: recipe.price,
        time: recipe.time,
        image: recipe.image,
        name: recipe.title,
        difficulty: recipe.difficulty,
        rating: recipe.rating,
        instructions: instructions,
        ingredients: ingredients,
      },
    });
  }

  return (
    <>
      <div className="my-recipe-item-holder">
        <button
          onClick={() => {
            deleteRecipe(recipe.id);
          }}
          className="delete-button"
        >
          {" "}
          X{" "}
        </button>
        <img
          className="my-recipe-image"
          src={recipe.image}
          alt="cornflakes"
          onClick={handleClick}
        />
        <div className="my-recipe-item-txt">
          <h4 className="saved-recipe-item-txt">{recipe.name}</h4>
        </div>
      </div>
    </>
  );
}
