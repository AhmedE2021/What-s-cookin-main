
import { useLocation } from "react-router-dom";
export default function TopComponentInRecipe() {
  const location = useLocation();



  return (
    <section className="inRecipe-top-component-section">
      <div className="inRecipe-top-component-first-section">
        <div className="inRecipe-heading-picture-holder">
          <img
            src={location.state.image}
            className="inRecipe-recipe-picture"
            alt="The meal you are cooking"
          />
        </div>
        <div className="inRecipe-heading-section">
          <h2 className="inRecipe-recipe-name">{location.state.name}</h2>
          <div className="inRecipe-rating-save-holder">
            <h2>🌟{location.state.rating}</h2>
            <div className="inRecipe-save-recipe">
              <h2>Icon</h2>
              <h2>Save</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="inRecipe-top-component-second-section">
        <div className="inRecipe-stats-section">
          <div className="inRecipe-stat-item">
            <h2 className="inRecipe-stat-text">price</h2>
            <h2 className="inRecipe-stat-text">{location.state.price}</h2>
          </div>
          <div className="inRecipe-stat-item">
            <h2 className="inRecipe-stat-text">Time</h2>
            <h2 className="inRecipe-stat-text">{location.state.time}</h2>
          </div>
          <div className="inRecipe-stat-item">
            <h2 className="inRecipe-stat-text">Diffulculty</h2>
            <h2 className="inRecipe-stat-text">{location.state.difficulty}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
