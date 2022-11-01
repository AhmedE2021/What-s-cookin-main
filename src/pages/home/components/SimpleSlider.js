import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//importing slider hook 
import Slider from "react-slick";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { db } from "../../../firebaseConfig";
import {collection, getDocs} from "@firebase/firestore";
export default function SimpleSlider({ settings }) {
 

  const [RecommendRecipes, setRecommendRecipes] = useState([]);
  const recipesCollectionRef = collection(db, "RecommendRecipes");

  useEffect(() => {
    const getRecommendRecipes = async () => {
      const data = await getDocs(recipesCollectionRef);
      setRecommendRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRecommendRecipes();
  }, []);

return(
<section className="recom">
<h2>Recommended</h2>
<Slider {...settings}>
 
          {RecommendRecipes.map(RecommendRecipe => (
                    <RecipeCard RecommendRecipe={RecommendRecipe} key={RecommendRecipe.id} />
                ))}
   
        </Slider>
</section>

);

}