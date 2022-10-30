import DescriptComponentInRecipe from "./ComponentsInRecipe/inRecipeDescript";
import TopComponentInRecipe from "./ComponentsInRecipe/InrRecipeTop";
import TabsComponent from "./ComponentsInRecipe/Tabs/TabsComponent";
import { useLocation } from "react-router-dom";

export default function InRecipe() {
  const location = useLocation();
  console.log(location.state.instructions);
  return (
    <main className="in-recipe-main">
      <TopComponentInRecipe />
      <DescriptComponentInRecipe />
      <TabsComponent />
    </main>
  );
}
