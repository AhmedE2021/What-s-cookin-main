import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import RecipeDetails from "../../components/RecipeDetails";
import {FaArrowRight, FaSearch } from "react-icons/fa"
import RecipesList from "../../components/RecipesList";
import CategoryCard from "../../components/CategoryCard";

export default function SearchRecipe (){

    const [input, setInput] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [suggestion, setSuggestion] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchRecipeDetail, setSearchRecipeDetail] = useState(false);
  
    useEffect(() => {
      async function getCategories() {
          const url = "https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
          const response = await fetch(url);
          const data = await response.json();
          const categoriesArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
          setCategories(categoriesArray);
      }
      getCategories();
  }, []);




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
            <NavBar/> 

  <div  className="search-recipe-form search-form">
   
     
     {searchRecipeDetail ? (
            <button
              onClick={() => {
                setSearchRecipeDetail(!searchRecipeDetail);
              }}
             
            >
             <FaArrowRight color="var(--light-grey)"/>
            </button>
          ) : (
            <button
              onClick={() => {
                setSearchRecipeDetail(!searchRecipeDetail);
              }}
            
            >
                 <FaSearch color="var(--light-grey)"/>
            </button>
            
          )}

<div>
                
             
                <input
               
                type="text"
                placeholder={
                  searchRecipeDetail ? "Input Disabled" : "Enter Recipe Name"
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
        <RecipeDetails recipes={recipes} searchInput={input} />
      ) : (
        <div>
        <div className="categories-list-container">
{categories.map(category => (
                    <CategoryCard category={category} key={category.id} />
                ))}
                </div>
               
  
              <RecipesList setInput={setInput} recipes={recipes} />
</div>
          
      )}
 <br/><br/><br/>
      </div>
      
     </div>
    )
 
}
