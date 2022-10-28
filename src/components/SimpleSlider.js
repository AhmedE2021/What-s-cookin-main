import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { db } from "../components/firbaseConfig";
import {collection, getDocs} from "@firebase/firestore";
export default function SimpleSlider({ settings }) {
 

  const [recipes, setRecipes] = useState([]);
  const usersCollectionRef = collection(db, "recipes");

  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(usersCollectionRef);
      setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRecipes();
  }, []);

return(
<section className="recom">
<h2>Recommended</h2>
<Slider {...settings}>
 
          {recipes.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe.id} />
                ))}
   
        </Slider>
</section>

);

}