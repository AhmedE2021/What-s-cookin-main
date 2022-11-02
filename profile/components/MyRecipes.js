import CreateRecipeCard from "./CreateRecipeComponent";
import MyRecipeItem from "./MyRecipeItem";

export default function MyRecipesPage() {
  return (
    <section className="list-page-wrapper">
      <MyRecipeItem />
      <CreateRecipeCard />
    </section>
  );
}
