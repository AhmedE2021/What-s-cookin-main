import { useEffect, useState } from "react";
import RecipeCard3 from "./RecipeCard3";




function CategoryList ()  {


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

    return (
      <div>
          {recipes?.map((recipe) => {
            return <RecipeCard3 key={recipe.id} recipe={recipe} />;
          })}
      
      </div>
    );
  };
  
  export default CategoryList;