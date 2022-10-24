import RecipeCard from "./RecipeCard";


const RecipeList = ({ recipes, setInput }) => {
    return (
      <div>
          {recipes?.map((recipe, index) => {
            return <RecipeCard key={index} setInput={setInput} recipe={recipe} />;
          })}
      
      </div>
    );
  };
  
  export default RecipeList;