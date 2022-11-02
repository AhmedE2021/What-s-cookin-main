import { getDocs, collection } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";

export default function FormNewRecipe() {
  const [MyRecipes, setMyRecipes] = useState([]);

  const recipesCollectionRef = collection(db, "myRecipes");

  useEffect(() => {
    const getMyRecipes = async () => {
      const data = await getDocs(recipesCollectionRef);
      setMyRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(MyRecipes);
    getMyRecipes();
  }, []);

  return(
    <>
  
        <div className="logo-holder">
            <img className="logo-pic" src="Logo2.png" />
        </div> 
 <form>
     <div className="form-holder"/>
      <div>
        <legend>
                <label  className="text" for="title">Title</label>
            </legend>
        <input  className="input" type="text" id="title"placeholder="Give your recipe a name" />
     </div>
    <br/>
    <div>
        <legend>
           <label for="title">Image</label>
        </legend>
        <input className="input" type="file" id="image"/>
    </div>
    <br/>
    <div>
        <legend>
          <label for="description">Description</label>
        </legend>
        <textarea className="input" id="title"placeholder="Introduce your recipe, add notes, cooking tips etc."></textarea>
    </div>
    <br/>
    <div>
        <legend>
          <label for="title">Ingredients</label>
        </legend>
        <input className="input" type="text" id="title"placeholder="Add one or paste multiple ingredients."/>
    </div>
    <br/>
    <div>
        <legend>
          <label for="title">Instructions</label>
        </legend>
        <input className="input" type="text" id="title"placeholder="Add one or paste multiple steps. "/>
    </div>
    <br/>
    <br/>
    <input className="inputt" type="submit"/>
 </div>
 </form>
 </>


  );
}
