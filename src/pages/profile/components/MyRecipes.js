////KALOYAN////

import { useEffect, useState } from "react";
import CreateRecipeCard from "./CreateRecipeComponent";
import MyRecipeCard from "./small Components/MyRecipeCard";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function MyRecipesPage() {
  const [MyRecipes, setMyRecipes] = useState([]);
  const collectionRef = collection(db, "myRecipes");

  useEffect(() => {
    const getMyRecipes = async () => {
      const data = await getDocs(collectionRef);
      setMyRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMyRecipes();
  }, []);

  return (
    <section className="list-page-wrapper" style={{ backgroundColor: "white" }}>
      <div className="create-recipe-btn-holder">
        <CreateRecipeCard />
      </div>
      <hr />
      <div
        className="myRecipes-cards-holder"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {MyRecipes.map((MyRecipe) => (
          <MyRecipeCard recipe={MyRecipe} key={MyRecipe.id} />
        ))}
      </div>
    </section>
  );
}
