import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function IntroSection () {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/search-recipe");
    }
  

    return(
        <section>
        <div className="intro-img">
          <div className="intro-search-box">
            <h1>Whats's Cookin'</h1>
            <div className="search-form">
              <form className="search">
                <button onClick={handleClick} className="search__button">
                  <FaSearch color="var(--light-grey)" />
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

    )
}