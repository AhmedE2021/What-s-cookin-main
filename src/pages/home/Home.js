

import {FaSearch } from "react-icons/fa"
import NavBar from "../../components/NavBar"
import "../../styles/Home.css"
export default function Home () {

return(

<div>
  <NavBar/>
<section>
<div className="intro-img">
<div className="intro-search-box">
<h1>Whats's Cookin'</h1>
     <div className="search-form">

     <form className="search">
     <button className="search__button">
                    <FaSearch/>
                </button>
                <input
                    className="search__input"
                    placeholder="Recipe/Ingredients"
                    type="text"
                    id="search"
                    
                />
              
            </form>
      </div>
</div>
</div>


</section>
  
</div>

)

}
