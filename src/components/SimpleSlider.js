import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function SimpleSlider({ settings }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      async function getRecipes() {
          const url = "https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";
          const response = await fetch(url);
          const data = await response.json();
          const recipesArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
          setRecipes(recipesArray);
      }
      getRecipes();
  }, []);

return(
<section className="recom">
<h2>Recommended</h2>
<Slider {...settings}>
 
          {recipes.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe.id} />
                ))}
   
        </Slider>
</section>

);

}