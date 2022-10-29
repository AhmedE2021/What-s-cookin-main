import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
<<<<<<< HEAD:src/components/SimpleSlider.js
import { db } from "../firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

export default function SimpleSlider({ settings }) {
  const [recipes, setRecipes] = useState([]);
  const recipesCollectionRef = collection(db, "recipes");
=======
import { db } from "../../../firebaseConfig";
import {collection, getDocs} from "@firebase/firestore";
export default function SimpleSlider({ settings }) {
 

  const [RecommendRecipes, setRecommendRecipes] = useState([]);
  const recipesCollectionRef = collection(db, "RecommendRecipes");
>>>>>>> c0d4f07ece84777f02aa152edf715099c1fe0598:src/pages/home/components/SimpleSlider.js

  useEffect(() => {
    const getRecommendRecipes = async () => {
      const data = await getDocs(recipesCollectionRef);
      setRecommendRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRecommendRecipes();
  }, []);

<<<<<<< HEAD:src/components/SimpleSlider.js
  return (
    <section className="recom">
      <h2>Recommended</h2>
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </Slider>
    </section>
  );
}
=======
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
>>>>>>> c0d4f07ece84777f02aa152edf715099c1fe0598:src/pages/home/components/SimpleSlider.js
