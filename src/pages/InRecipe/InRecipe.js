import DescriptComponentInRecipe from "./ComponentsInRecipe/inRecipeDescript";
import TopComponentInRecipe from "./ComponentsInRecipe/InrRecipeTop";
import TabsComponent from "./ComponentsInRecipe/Tabs/TabsComponent";

export default function InRecipe() {
  return (
    <main className="in-recipe-main">
      <TopComponentInRecipe />
      <DescriptComponentInRecipe />
      <TabsComponent />
    </main>
  );
}
