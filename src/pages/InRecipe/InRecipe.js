import DescriptComponentInRecipe from "./ComponentsInRecipe/inRecipeDescript";
import TopComponentInRecipe from "./ComponentsInRecipe/InrRecipeTop";

export default function InRecipe() {
  return (
    <main className="in-recipe-main">
      <TopComponentInRecipe />
      <DescriptComponentInRecipe />
    </main>
  );
}
