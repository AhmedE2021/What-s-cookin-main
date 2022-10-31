
import NavBar from "../../components/NavBar";
import "../../styles/Home.css";
import RecommendedRecipes from "./components/RecommendedRecipes";
import CheapestRecipes from "./components/CheapestRecipes";
import IntroSection from "./components/IntroSection";

export default function Home() {
  


  return (
    <div className="home-page">
      <NavBar />
   <IntroSection/>
    <RecommendedRecipes/>
   <CheapestRecipes/>

      <br></br>
      <br></br>
    </div>
  );
}
