

import {FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar"
import "../../styles/Home.css"



export default function Home () {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/search-recipe")
  }

return(

<div>
  <NavBar/> 
<section>
<div className="intro-img">
  <div className="intro-search-box">
    <h1>Whats's Cookin'</h1>
      <div className="search-form">

             <form className="search">
                <button onClick={handleClick} className="search__button">
                    <FaSearch color="var(-- light-gret)"/>
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
<h2>Recommended</h2>

</section>
  
</div>

)

}