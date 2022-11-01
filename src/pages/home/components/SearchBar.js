import React, { useState, useEffect } from "react";
import {FaArrowRight, FaSearch } from "react-icons/fa"
import { db } from "../../../firebaseConfig";
import {collection, getDocs} from "@firebase/firestore";
import RecipeSearchResult from "./RecipeSearchResult";






export default function SearchRecipe (){

    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [searchRecipeDetail, setSearchRecipeDetail] = useState(false);
    const [CheapestRecipes, setCheapestRecipes] = useState([]);
    const recipesCollectionRef = collection(db, "CheapestRecipes");
  // fetching recipes data from firestore //ahmed
    useEffect(() => {
      const getCheapestRecipes = async () => {
        const data = await getDocs(recipesCollectionRef);
        setCheapestRecipes(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
  
      getCheapestRecipes();
    }, []);


    // if the entered input equal recipe name in the search bar
    //  return with name as suggestion
  useEffect(() => {
    if (!CheapestRecipes) return;
    if (!input) return;

    let currentSuggestion = [];

    for (let i = 0; i < CheapestRecipes.length; i++) {
      if (CheapestRecipes[i].name.toUpperCase().indexOf(input.toUpperCase()) > -1) {
        currentSuggestion.push(CheapestRecipes[i].name);
      }

      if (currentSuggestion.includes(input)) {
        currentSuggestion = [];
        break;
      }
    }

    setSuggestion(currentSuggestion);
    
  }, [input]);




    return(
         // direct the suggesttion name with click function to recipeSearchResult page
         //
        <div>
        <div>
           
            <div>
            

  <div  className="search-recipe-form search-form">
   
   
     {searchRecipeDetail ? (
            <button
            onClick={() => {
              setSearchRecipeDetail(!searchRecipeDetail);
            }}
             
            >
             <FaArrowRight color="var(--light-grey)"/>
            </button>
          ) 
          
          : (
            <button
            onClick={() => {
              setSearchRecipeDetail(!searchRecipeDetail);
            }}
            >
                 <FaSearch color="var(--light-grey)"/>
            </button>
            
          )
          
          }

<div>
                
             
                <input
               
                type="text"
                placeholder={
                  searchRecipeDetail ? "Input Disabled" : "Enter Recipe / Ingredients"
                }
                value={input}
                disabled={searchRecipeDetail}
                onChange={(e) => setInput(e.target.value)}
              
              />
              </div>
  </div>
        </div>
        <div>
            {suggestion.length > 0 && input.length > 0 ? (
              <div
                className={``}
              >
                {suggestion?.map((sug, ind) => (
                  <p
                    key={ind}
                    onClick={() => {
                      setInput(sug);
                    }}
                    className="search-item"
                  >
                    👉 {sug}
                  </p>
                ))}
              </div>
            ) : null}

     </div> 
  



</div>
<div className="search-results">
{searchRecipeDetail ? (
        <RecipeSearchResult CheapestRecipes={CheapestRecipes} searchInput={input} />
      ) : (
        <div>

        
</div>
          
      )}

      </div>
      
     </div>
    )
 
}







































