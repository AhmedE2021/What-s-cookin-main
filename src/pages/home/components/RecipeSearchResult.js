import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





const RecipeSearchResult = ({ CheapestRecipes, searchInput }) => {


  const [CheapestRecipe, setCheapestRecipes] = useState();
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
//use navigate function to direct the recipe data to inRecipe Page 
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
        }
    } 
    );}

  useEffect(() => {
    for (let i = 0; i < CheapestRecipes.length; i++) {
      if (CheapestRecipes[i].name.toUpperCase() === searchInput.toUpperCase()) {
        setCheapestRecipes(CheapestRecipes[i]);
        console.log(CheapestRecipes[i]);
        break;
      }
    }
  }, []);


  useEffect(() => {
      setId(CheapestRecipe?.id);
      setPrice(CheapestRecipe?.price);
      setTime(CheapestRecipe?.time);
      setImage(CheapestRecipe?.image);
      setName(CheapestRecipe?.name);
      setDifficulty(CheapestRecipe?.difficulty);
      setRating(CheapestRecipe?.rating);
      setInstructions(CheapestRecipe?.Instructions);
      setIngredients(CheapestRecipe?.Ingredients);

    }, [CheapestRecipe]);
  




  return (
    <div>
   
<article className="recipecard3" onClick={handleClick}>
           
           <img src={CheapestRecipe?.image} alt={CheapestRecipe?.name} />
           <div className="card-bottom3" >
           <h2>{CheapestRecipe?.name}</h2>
           <div className="card-dtls card-dtls3">
               <p>{CheapestRecipe?.price}</p>
               <p>{CheapestRecipe?.time}</p>
               <p>{CheapestRecipe?.difficulty}</p>
               <p>🌟{CheapestRecipe?.rating}</p>
           </div>
           </div>
          
          
       </article>


    </div>
  );
};
export default RecipeSearchResult;

