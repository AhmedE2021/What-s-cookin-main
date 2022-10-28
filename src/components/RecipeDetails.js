// import React, { useEffect, useState } from "react";


// const RecipeDetails = ({ recipes, searchInput }) => {
//   const [recipe, setRecipe] = useState();
//   useEffect(() => {
//     for (let i = 0; i < recipes.length; i++) {
//       if (recipes[i].title.toUpperCase() === searchInput.toUpperCase()) {
//         setRecipe(recipes[i]);
//         console.log(recipes[i]);
//         break;
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <div className="absolute md:h-screen space-x-5 mt-10 lg:mt-0 flex w-screen justify-center items-start lg:items-center">
//         <img
//           src={ recipe?.image} alt={recipe?.id}
//           className=""
//         />
//         <div className="md:w-1/2">
//           <h1 className="font-bold text-4xl">{recipe?.title}</h1>
//           <p className="mt-2">{recipe?.overview}</p>
//           <div className="mt-12 space-y-1">
//             <h3 className="font-bold text-xl">
//               Price:{" "}
//               <span className="font-normal">{recipe?.price}</span>
//             </h3>
//             <h3 className="font-bold text-xl">
//               Difficulty:{" "}
//               <span className="font-normal"> {recipe?.difficulty}</span>
//             </h3>
//             <h3 className="font-bold text-xl">
//               Time:{" "}
//               <span className="font-normal"> {recipe?.time}</span>
//             </h3>
//             <h3 className="font-bold text-xl">
//             ❤️{" "}
//               <span className="font-normal"> {recipe?.like}</span>
//             </h3>
//             <h3 className="font-bold text-xl">
//             🌟{" "}
//               <span className="font-normal"> {recipe?.rating}</span>
//             </h3>
//           </div>
//         </div>
//       </div>
//       <img
//         className="" 
//         src={recipe?.backdrop_path} alt={recipe?.id}
//       />
//       <img
//         className=""
//         src={recipe?.poster_path} alt={recipe?.id}
//       />
//     </div>
//   );
// };

// export default RecipeDetails;

// import { db } from "../firebaseConfig";

// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // import {collection, getDoc} from "@firebase/firestore";

// export default function RecipeDetails () {
//   // const [recipe, setRecipe] = useState({});
//     // const params = useParams();
//     // console.log(params);
//    const location = useLocation();

   


// // const recipesCollectionRef = collection(db, "recipes");

// // useEffect(() => {
// //   const getRecipe = async () => {

// //     const data = await getDoc(recipesCollectionRef);
// //     setRecipe(data.doc.map((doc) => ({ ...doc.data(), id: doc.id })));
// //   };

// //   getRecipe();
// // }, [recipesCollectionRef]);
  


//     return(
//       <section className="page">
//       <section className="post-row">
//           <article>
//               <h3>{location.state.price}</h3>
//               <h3>{location.state.time}</h3>
              
//           </article>
          
//       </section>
//   </section>
//     )

// }