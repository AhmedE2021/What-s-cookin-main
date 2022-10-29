import { useEffect, useState } from "react";
import RecipeCard3 from "./RecipeCard3";
import {getDocs, collection} from "@firebase/firestore"
import { db } from "../../../firebaseConfig"


function RecipeList ()  {


  const [recipes, setRecipes] = useState([]);
  const recipesCollectionRef = collection(db, "recipes");
  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(recipesCollectionRef);
      setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRecipes();
  }, []);


    return (
      <div>
       {recipes.map((recipe) => (
            <RecipeCard3 recipe={recipe} key={recipe.id} />
          ))}
      
      </div>
    );
  };
  
  export default RecipeList;