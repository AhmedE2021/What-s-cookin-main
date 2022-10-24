import React, { useEffect, useState } from "react";


const RecipeDetails = ({ recipes, searchInput }) => {
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].title.toUpperCase() === searchInput.toUpperCase()) {
        setRecipe(recipes[i]);
        console.log(recipes[i]);
        break;
      }
    }
  }, []);

  return (
    <div>
      <div className="absolute md:h-screen space-x-5 mt-10 lg:mt-0 flex w-screen justify-center items-start lg:items-center">
        <img
          src={ recipe?.image}
          className="hidden shadow-lg md:block w-64 rounded-md"
        />
        <div className="md:w-1/2">
          <h1 className="font-bold text-4xl">{recipe?.title}</h1>
          <p className="mt-2">{recipe?.overview}</p>
          <div className="mt-12 space-y-1">
            <h3 className="font-bold text-xl">
              Price:{" "}
              <span className="font-normal">{recipe?.price}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Difficulty:{" "}
              <span className="font-normal"> {recipe?.difficulty}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Time:{" "}
              <span className="font-normal"> {recipe?.time}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Vote Count:{" "}
              <span className="font-normal"> {recipe?.vote_count}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Adult Content:{" "}
              <span className="font-normal">
                {recipe?.adult ? "18+" : "NIL"}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <img
        className="hidden lg:block opacity-20"
        src={recipe?.backdrop_path}
      />
      <img
        className="lg:hidden opacity-20"
        src={recipe?.poster_path}
      />
    </div>
  );
};

export default RecipeDetails;