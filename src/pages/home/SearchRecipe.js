import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import RecipeDetails from "../../components/RecipeDetails";
import RecipeList from "../../components/RecipeList";
import {FaSearch } from "react-icons/fa"

export default function SearchRecipe (){

    const [input, setInput] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [suggestion, setSuggestion] = useState([]);
  
    const [searchRecipeDetail, setSearchRecipeDetail] = useState(false);
  
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

  useEffect(() => {
    if (!recipes) return;
    if (!input) return;

    let currentSuggestion = [];

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].title.toUpperCase().indexOf(input.toUpperCase()) > -1) {
        currentSuggestion.push(recipes[i].title);
      }

      if (currentSuggestion.includes(input)) {
        currentSuggestion = [];
        break;
      }
    }

    setSuggestion(currentSuggestion);
  }, [input]);




    return(
        <div>
        <div>
            <div>
            <div>
            <NavBar/> 

     <form  className="search-form">
    
                    <FaSearch color="var(--light-grey)"/>
             
        <input
       
        type="text"
        placeholder={
          searchRecipeDetail ? "Input Disabled" : "Enter Recipe Name"
        }
        value={input}
        disabled={searchRecipeDetail}
        onChange={(e) => setInput(e.target.value)}
        
      />
      
      </form>
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
     {searchRecipeDetail ? (
            <button
              onClick={() => {
                setSearchRecipeDetail(!searchRecipeDetail);
              }}
             
            >
              Go Back
            </button>
          ) : (
            <button
              onClick={() => {
                setSearchRecipeDetail(!searchRecipeDetail);
              }}
            
            >
              Search
            </button>
          )}
        </div>
<h1>Discover Recipe</h1>
</div>
<div className="search-results">
{searchRecipeDetail ? (
        <RecipeDetails recipes={recipes} searchInput={input} />
      ) : (
        <RecipeList setInput={setInput} recipes={recipes} />
      )}
      </div>
     </div>
    )
}