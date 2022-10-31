import { useLocation } from "react-router-dom";
import IngrItem from "../../IngredientItem";
export default function IngredientsTab() {
  const location = useLocation();
  const ingredients = location.state.ingredients;
  console.log(location.state.ingredients);
  return (
    <>
      <div className="Ingredients-tab-items-holder">
        {ingredients.map((ingredient) => (
          <IngrItem ingredient={ingredient} />
        ))}
      </div>
    </>
  );
}
