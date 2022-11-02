export default function MyRecipeItem() {
  return (
    <div className="my-recipe-item-holder">
      <img
        className="my-recipe-image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Kellogg%27s_Corn_Flakes%2C_with_milk.jpg/1200px-Kellogg%27s_Corn_Flakes%2C_with_milk.jpg"
        alt="cornflakes"
      />
      <div className="my-recipe-item-txt">
        <h4 className="saved-recipe-item-txt">Cornflakes with milk</h4>
      </div>
    </div>
  );
}
