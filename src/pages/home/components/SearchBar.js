// import React, { useState, useEffect } from "react";
// import NavBar from "../../components/NavBar";
// import {FaArrowRight, FaSearch } from "react-icons/fa"
// import RecipesList from "../../components/RecipesList";
// import CategoryCard from "../../components/CategoryCard";
// import RecipeDetails from "../../components/RecipeDetails"
// import { db } from "../../firebaseConfig";
// import {collection, getDocs} from "@firebase/firestore";
// import InRecipe from "../InRecipe/InRecipe";




// export default function SearchRecipe (){

//     const [input, setInput] = useState("");
//     const [recipes, setRecipes] = useState([]);
//     const [suggestion, setSuggestion] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [searchRecipeDetail, setSearchRecipeDetail] = useState(false);

//     const recipesCollectionRef = collection(db, "recipes");
  
//     useEffect(() => {
//       async function getCategories() {
//           const url = "https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
//           const response = await fetch(url);
//           const data = await response.json();
//           const categoriesArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
//           setCategories(categoriesArray);
//       }
//       getCategories();
//   }, []);




//   useEffect(() => {
//     const getRecipes = async () => {
//       const data = await getDocs(recipesCollectionRef);
//       setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getRecipes();
//   }, []);


//   useEffect(() => {
//     if (!recipes) return;
//     if (!input) return;

//     let currentSuggestion = [];

//     for (let i = 0; i < recipes.length; i++) {
//       if (recipes[i].title.toUpperCase().indexOf(input.toUpperCase()) > -1) {
//         currentSuggestion.push(recipes[i].title);
//       }

//       if (currentSuggestion.includes(input)) {
//         currentSuggestion = [];
//         break;
//       }
//     }

//     setSuggestion(currentSuggestion);
    
//   }, [input]);




//     return(
//         <div>
//         <div>
           
//             <div>
//             <NavBar/> 

//   <div  className="search-recipe-form search-form">
   
     
//      {searchRecipeDetail ? (
//             <button
//             onClick={() => {
//               setSearchRecipeDetail(!searchRecipeDetail);
//             }}
             
//             >
//              <FaArrowRight color="var(--light-grey)"/>
//             </button>
//           ) 
          
//           : (
//             <button
//             onClick={() => {
//               setSearchRecipeDetail(!searchRecipeDetail);
//             }}
//             >
//                  <FaSearch color="var(--light-grey)"/>
//             </button>
            
//           )
          
//           }

// <div>
                
             
//                 <input
               
//                 type="text"
//                 placeholder={
//                   searchRecipeDetail ? "Input Disabled" : "Enter Recipe / Ingredients"
//                 }
//                 value={input}
//                 disabled={searchRecipeDetail}
//                 onChange={(e) => setInput(e.target.value)}
              
//               />
//               </div>
//   </div>
//         </div>
//         <div>
//             {suggestion.length > 0 && input.length > 0 ? (
//               <div
//                 className={``}
//               >
//                 {suggestion?.map((sug, ind) => (
//                   <p
//                     key={ind}
//                     onClick={() => {
//                       setInput(sug);
//                     }}
//                     className="search-item"
//                   >
//                     👉 {sug}
//                   </p>
//                 ))}
//               </div>
//             ) : null}

//      </div> 
  



// </div>
// <div className="search-results">
// {searchRecipeDetail ? (
//         <InRecipe recipes={recipes} searchInput={input} />
//       ) : (
//         <div>
//         <div className="categories-list-container">
// {categories.map(category => (
//                     <CategoryCard category={category} key={category.id} />
//                 ))}
//                 </div>
               
  
//               <RecipesList setInput={setInput} recipes={recipes} />
// </div>
          
//       )}
//  <br/><br/><br/>
//       </div>
      
//      </div>
//     )
 
// }





















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




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




function Search() {
const [value, setValue] = useState('');
const [result, setResult] = useState([]);
const navigate = useNavigate();

const [id, setId] = useState();
const [price, setPrice] = useState();
const [time, setTime] = useState();
const [image, setImage] = useState();
const [title, setTitle] = useState();
const [difficulty, setDifficulty] = useState();
const [rating, setRating] = useState();
const [instructions, setInstructions] = useState([]);
const [ingredients, setIngredients] = useState([]);

useEffect(() => {
  setId(value.id);
  setPrice(value.price);
  setTime(value.time);
  setImage(value.image);
  setTitle(value.title);
  setDifficulty(value.difficulty);
  setRating(value.rating);
  setInstructions(value.Instructions);
  setIngredients(value.Ingredients);
}, [value]);

function handleClick() {
  navigate("/InRecipe", {
    state: {
      id: id,
      price: price,
      time: time,
      image: image,
      name: title,
      difficulty: difficulty,
      rating: rating,
      instructions: instructions,
      ingredients: ingredients,
    },
  });
}



useEffect(() => {
if(value.length > 0){
  fetch('https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
  .then(
    response => response.json()
  ).then(responseData => {
    setResult([]);
    let searchQuery = value.toLowerCase();
    for (const key in responseData){
      let recipe = responseData[key].title.toLowerCase();
      if (recipe.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
        setResult(prevResult => {
          return [...prevResult, responseData[key].title]
        });
      }
    }
  }).catch(error => {
    console.log(error);
  })
}else {
  setResult([]);
}

}, [value])



  return (
    <div>
      <section>
		
 


    <input 
    type="text"
    placeholder={ 
      "Enter Recipe Name"
    }
      className="search-recipe-form search-form"
     onChange={(event) => setValue(event.target.value)}
     value={value}
     

    />
<div  className='search-item'>
{result.map((result, index) => (
  <a href='' key={index}>
  <h3 className='searchEntry'>
    {result}
  </h3>
  </a>
))}

</div>

</section>

    </div>
  );
}

export default Search;



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















