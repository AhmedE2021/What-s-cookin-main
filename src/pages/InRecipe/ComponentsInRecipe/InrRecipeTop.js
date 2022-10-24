export default function TopComponentInRecipe() {
  return (
    <section className="inRecipe-top-component-section">
      <div className="inRecipe-top-component-first-section">
        <div className="inRecipe-heading-picture-holder">
          <img
            src="https://pinchandswirl.com/wp-content/uploads/2021/05/Lemon-Garlic-Butter-Shrimp-sq.jpg"
            className="inRecipe-recipe-picture"
            alt="The meal you are cooking"
          />
        </div>
        <div className="inRecipe-heading-section">
          <h2 className="inRecipe-recipe-name">Garlic shrimps with rice</h2>
          <div className="inRecipe-rating-save-holder">
            <h2>Rating</h2>
            <div className="inRecipe-save-recipe">
              <h2>ICON</h2>
              <h2>Save</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="inRecipe-top-component-second-section">
        <div className="inRecipe-stats-section">
          <div className="inRecipe-stat-item">
            <h2 className="inRecipe-stat-text">Price</h2>
            <h2 className="inRecipe-stat-text">60 dkk</h2>
          </div>
          <div className="inRecipe-stat-item">
            <h2 className="inRecipe-stat-text">Time</h2>
            <h2 className="inRecipe-stat-text">60 min</h2>
          </div>
          <div className="inRecipe-stat-item">
            <h2 className="inRecipe-stat-text">Diffulculty</h2>
            <h2 className="inRecipe-stat-text">Easy</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
