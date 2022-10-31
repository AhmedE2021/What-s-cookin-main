import DescriptComponentInRecipe from "./ComponentsInRecipe/inRecipeDescript";
import TopComponentInRecipe from "./ComponentsInRecipe/InrRecipeTop";
import TabsComponent from "./ComponentsInRecipe/Tabs/TabsComponent";
import NavBar from "../../components/NavBar"
import { useLocation } from "react-router-dom";

export default function InRecipe() {
  const location = useLocation();
  console.log(location.state.instructions);
  return (
    <main className="in-recipe-main">
      <NavBar/>
      <TopComponentInRecipe />
      <DescriptComponentInRecipe />
      <TabsComponent />
    </main>
  );
}
