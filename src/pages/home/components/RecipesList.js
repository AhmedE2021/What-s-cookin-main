


////////Ahmed///////

import { useEffect, useState } from "react";
import RecipeCard3 from "./RecipeCard3";
import {getDocs, collection} from "@firebase/firestore"
import { db } from "../../../firebaseConfig"


function RecipeList ()  {


  const [CheapestRecipes, setCheapestRecipes] = useState([]);
  const CheapestRecipesCollectionRef = collection(db, "CheapestRecipes");
  useEffect(() => {
    const getCheapestRecipes = async () => {
      const data = await getDocs(CheapestRecipesCollectionRef);
      setCheapestRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCheapestRecipes();
  }, []);


    return (
      <div className="recipesList">
        <h2 className="recipesList-h2"> All Recipes</h2>
      <div>
       {CheapestRecipes.map((CheapestRecipe) => (
            <RecipeCard3 CheapestRecipe={CheapestRecipe} key={CheapestRecipe.id} />
          ))}
      
      </div>
      </div>
    );
  };
  
  export default RecipeList;