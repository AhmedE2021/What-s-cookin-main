////KALOYAN///


import DescriptComponentInRecipe from "./ComponentsInRecipe/inRecipeDescript";
import TopComponentInRecipe from "./ComponentsInRecipe/InrRecipeTop";
import TabsComponent from "./ComponentsInRecipe/Tabs/TabsComponent";
import NavBar from "../../components/NavBar";
import { useLocation } from "react-router-dom";
import GoBackNav from "../home/components/SmallComponents/goBakckNavBar";

export default function InRecipe() {
  const location = useLocation();
  return (
    <main className="in-recipe-main">
      <GoBackNav />
      <NavBar />
      <TopComponentInRecipe />
      <DescriptComponentInRecipe />
      <TabsComponent />
      <br /> <br /> <br />
    </main>
  );
}
