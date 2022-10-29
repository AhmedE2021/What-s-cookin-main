import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeOfTheDay () {

    const navigate = useNavigate();
    function handleClick() {
        navigate(`recipeoftheday/${recipeOfTheDay.id}`);
    }
  
    const [recipeOfTheDay, setRecipeOfTheDay] = useState([]);
  
    useEffect(() => {
        async function getRecipeOfTheDay() {
            const url = "https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/recipeoftheday.json";
            const response = await fetch(url);
            const data = await response.json();
            const recipeOfTheDayArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setRecipeOfTheDay(recipeOfTheDayArray);
        }
        getRecipeOfTheDay();
    }, []);

    return(
<article onClick={handleClick} >
         <img src={recipeOfTheDay.image} alt={recipeOfTheDay.title} />
        </article>
    )

}