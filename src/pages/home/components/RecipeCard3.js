

////////Ahmed///////

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function RecipeCard3({ CheapestRecipe }) {
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
      setId(CheapestRecipe.id);
      setPrice(CheapestRecipe.price);
      setTime(CheapestRecipe.time);
      setImage(CheapestRecipe.image);
      setName(CheapestRecipe.name);
      setDifficulty(CheapestRecipe.difficulty);
      setRating(CheapestRecipe.rating);
      setInstructions(CheapestRecipe.Instructions);
      setIngredients(CheapestRecipe.Ingredients);
    }, [CheapestRecipe]);
    

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
           
            <img src={CheapestRecipe.image} alt={CheapestRecipe.name} />
            <div className="card-bottom3" >
            <h2>{CheapestRecipe.name}</h2>
            <div className="card-dtls card-dtls3">
                <p>{CheapestRecipe.price}</p>
                <p>{CheapestRecipe.time}</p>
                <p>{CheapestRecipe.difficulty}</p>
                <p>🌟{CheapestRecipe.rating}</p>
            </div>
            </div>
           
           
        </article>
    );}