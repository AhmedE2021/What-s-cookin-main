

import {FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar"
import "../../styles/Home.css"
import { db } from "../../components/firbaseConfig";
import {collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";

import RecipeCard2 from "../../components/RecipeCard2";
import SimpleSlider from "../../components/SimpleSlider";



export default function Home () {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/search-recipe")
  }

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

<div className="home-page">
  <NavBar/> 
<section>
<div className="intro-img" >

  <div className="intro-search-box">
    <h1>Whats's Cookin'</h1>
      <div className="search-form">

             <form className="search">
                <button onClick={handleClick} className="search__button">
                    <FaSearch color="var(--light-grey)"/>
                 </button>
                   <input
                    className="search__input"
                    placeholder="Recipe / Ingredients"
                    type="text"
                    id="search"
                    onClick={handleClick}
                    />
              
            </form>
      </div>
</div>
</div>
</section>
<section className="recom">

<SimpleSlider
               settings={{
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "60px",
                slidesToShow: 1.1,
                speed: 500
                }}/>
</section>
<section className="cheap-recipes">
  <div>
  <h2>Cheapest meals</h2>
  <h3>Based on what you already have</h3>
  </div>
  <div className="recipe-grid">
  {recipes.map(recipe => (
                    <RecipeCard2 recipe={recipe} key={recipe.id} />
                ))}
  </div>
</section>


<br></br><br></br>
  
</div>

)

}