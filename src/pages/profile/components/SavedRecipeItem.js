////KRISI////

export default function SavedRecipeItem() {
  return (
    <>
      <div className="saved-recipe-items-holder">
        <div className="saved-recipe-item-holder">
          <img
            className="saved-recipe-image"
            src="https://cdn.scrambledchefs.com/wp-content/uploads/2020/11/Slow-Cooker-Pork-Feature-735x735.jpg"
            alt="meals"
          />

          <div className="saved-recipe-item-txt">
            <h4>Meat</h4>
          </div>
        </div>
        <div className="saved-recipe-item-holder">
          <img
            className="saved-recipe-image"
            src="https://www.slowcookerfromscratch.com/wp-content/uploads/2020/10/Low-Carb-Keto-Instant-Pot-Dinners-with-Pork-collage-1200.jpeg"
            alt="meals"
          />

          <div className="saved-recipe-item-txt">
            <h4>Quick recipes</h4>
          </div>
        </div>
      </div>
    </>
  );
}
