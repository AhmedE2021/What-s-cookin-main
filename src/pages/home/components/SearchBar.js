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
  
    useEffect(() => {
      const getCheapestRecipes = async () => {
        const data = await getDocs(recipesCollectionRef);
        setCheapestRecipes(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
  
      getCheapestRecipes();
    }, []);


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





















// import React, { useEffect, useState, useNavigate } from 'react';
// import NavBar from "../../components/NavBar";
// export default function SearchRecipe() {
// const [value, setValue] = useState('');
// const [result, setResult] = useState([]);



// useEffect(() => {
// if(value.length > 0){
//  fetch('https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').then(
//     response => response.json()
    
//     ).then(responseData => {
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
//         <NavBar/>
   
//       <section >
		
//     <input 
//     type="text"
//     placeholder={ 
//       "Enter Recipe Name"
//     }
//     className="search-recipe-form search-form"
//      onChange={(event) => setValue(event.target.value)}
//      value={value}
     

//     />
// <div  className='searchBack'>
// {result.map((result, index) => (
//   <a href="/InRecipe" key={index} >
//   <div className='searchEntry'>
//     {result}
//   </div>
//   </a>
// ))}
// </div>

// </section>
// </div>
    
    
//   );
// }
















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';




// function Search() {
// const [value, setValue] = useState('');
// const [recipe, setRecipe] = useState([]);

// const navigate = useNavigate();

// const [id, setId] = useState();
// const [price, setPrice] = useState();
// const [time, setTime] = useState();
// const [image, setImage] = useState();
// const [title, setTitle] = useState();
// const [difficulty, setDifficulty] = useState();
// const [rating, setRating] = useState();
// const [instructions, setInstructions] = useState([]);
// const [ingredients, setIngredients] = useState([]);

// useEffect(() => {
//   setId(recipe.id);
//   setPrice(recipe.price);
//   setTime(recipe.time);
//   setImage(recipe.image);
//   setTitle(recipe.title);
//   setDifficulty(recipe.difficulty);
//   setRating(recipe.rating);
//   setInstructions(recipe.Instructions);
//   setIngredients(recipe.Ingredients);
// }, [recipe]);

// function handleClick() {
//   navigate("/InRecipe", {
//     state: {
//       id: id,
//       price: price,
//       time: time,
//       image: image,
//       name: title,
//       difficulty: difficulty,
//       rating: rating,
//       instructions: instructions,
//       ingredients: ingredients,
//     },
//   });
// }



// useEffect(() => {
// if(value.length > 0){
//   fetch('https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
//   .then(
//     response => response.json()
//   ).then(responseData => {
//     setRecipe([]);
//     let searchQuery = value.toLowerCase();
//     for (const key in responseData){
//       let recipe = responseData[key].title.toLowerCase();
//       if (recipe.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
//         setRecipe(prevRecipe => {
//           return [...prevRecipe, responseData[key].title]
//         });
//       }
//     }
//   }).catch(error => {
//     console.log(error);
//   })
// }else {
//   setRecipe([]);
// }

// }, [value])



//   return (
//     <div>
//       <section>
		
 


//     <input 
//     type="text"
//     placeholder={ 
//       "Enter Recipe Name"
//     }
//       className="search-recipe-form search-form"
//      onChange={(event) => setValue(event.target.value)}
//      value={value}
     

//     />
// <div  className='search-item'>
// {recipe.map((recipe, index) => (
//   <div href='' key={index}>
//   <h3 className='searchEntry' onClick={handleClick}>
//     {recipe}
//   </h3>
//   </div>
// ))}

// </div>

// </section>

//     </div>
//   );
// }

// export default Search;














// import React, { useState, useEffect } from "react";
// import { db } from "../../../firebaseConfig";


// function SearchBar() {
//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredRecipes, setFilteredRecipes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await db.collection("recipes").orderBy("createdDate").get();
//       setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     setFilteredRecipes(
//       recipes.filter(
//         (recipe) =>
//           recipe.name.toLowerCase().includes(search.toLowerCase()) ||
//           recipe.difficulty.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, recipes]);
//   return (
//     <>
//       <div className="App">
    
//         <input
//           type="text"
//           placeholder="Search"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       <div>
//         {filteredRecipes.map((recipe) => [
//           <ol>
//             <b>Consumer Details :</b> {<br />}
//             {recipe.name},{<br />}
//             {recipe.price},{<br />}
//             {recipe.time},{<br />}
//             {recipe.rating},{<br />}
//           </ol>,
//         ])}
//       </div>
//     </>
//   );
// }
// export default SearchBar;















