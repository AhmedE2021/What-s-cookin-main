import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import {FaArrowRight, FaSearch } from "react-icons/fa"
import RecipesList from "../../components/RecipesList";
import CategoryCard from "../../components/CategoryCard";
import RecipeDetails from "../../components/RecipeDetails"

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




// import React, { useEffect, useState } from 'react';
// import {Link} from "react-router-dom";




// export default function SearchRecipe() {
// const [value, setValue] = useState('');
// const [result, setResult] = useState([]);



// useEffect(() => {
// if(value.length > 0){
//   fetch('https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').then(
//     response => response.json()
//   ).then(responseData => {
//     setResult([]);
//     let searchQuery = value.toLowerCase();
//     for (const key in responseData){
//       let recipe = responseData[key].title.toLowerCase();
//       if (recipe.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
//         setResult(prevResult => {
//           return [...prevResult, responseData[key].title]
//         });
//       }
//     }
//   }).catch(error => {
//     console.log(error);
//   })
// }else {
//   setResult([]);
// }

// }, [value])



//   return (
//     <div>
//       <section className="garamond">
		
//     <h2 className="f2">Search your course</h2>
//     <input 
//     type="text"
//     placeholder={ 
//       "Enter Recipe Name"
//     }
//       className="searchBar"
//      onChange={(event) => setValue(event.target.value)}
//      value={value}
     

//     />
// <div  className='searchBack'>
// {result.map((result, index) => (
//   <Link to={"/recipe-details"}  key={index} >
//   <div className='searchEntry'>
//     {result}
//   </div>
//   </Link>
// ))}
// </div>

// </section>

//     </div>
//   );
// }
