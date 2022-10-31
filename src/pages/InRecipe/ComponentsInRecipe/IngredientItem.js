export default function IngrItem({ ingredient }) {
  return (
    <div className="Ingr-item-outer">
      <img
        className="ingr-img"
        src="https://cdn-icons-png.flaticon.com/512/2909/2909894.png"
        alt="Ingredient"
      />
      <h3 className="ingr-name">{ingredient}</h3>
      <h4 className="ingr-amout"></h4>
    </div>
  );
}
