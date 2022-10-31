import RecipeCard2 from "./RecipeCard2";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";


export default function CheapestRecipes (){

    const [CheapestRecipes, setCheapestRecipes] = useState([]);
    const recipesCollectionRef = collection(db, "CheapestRecipes");
  
    useEffect(() => {
      const getCheapestRecipes = async () => {
        const data = await getDocs(recipesCollectionRef);
        setCheapestRecipes(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
  
      getCheapestRecipes();
    }, []);
    return(

        <section className="cheap-recipes">
        <div>
          <h2>Cheapest meals</h2>
          <h3>Based on what you already have</h3>
        </div>
        <div className="recipe-grid">
          {CheapestRecipes.map((CheapestRecipe) => (
            <RecipeCard2
              CheapestRecipe={CheapestRecipe}
              key={CheapestRecipe.id}
            />
          ))}
        </div>
      </section>
    )
}