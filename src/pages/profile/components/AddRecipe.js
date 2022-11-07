import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebaseConfig";
import GoBackNav from "../../home/components/SmallComponents/goBakckNavBar";

export default function AddRecipePage() {
  const collectionRef = collection(db, "myRecipes");

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Difficulty, setDifficulty] = useState("");
  const [Ingredients, setIngredients] = useState([]);
  const [Instructions, setInstructions] = useState([]);
  const [Price, setPrice] = useState(0);
  const [Time, setTime] = useState(0);
  const [ImageURL, setImageURL] = useState("");

  const CommitRecipe = async () => {
    if (
      Title !== null ||
      Description !== null ||
      Ingredients !== null ||
      Instructions !== null
    ) {
      await addDoc(collectionRef, {
        title: Title,
        image: ImageURL,
        description: Description,
        difficulty: Difficulty,
        Ingredients: Ingredients,
        Instructions: Instructions,
        price: Number(Price),
        time: Time,
      });
    } else {
      Error("Please fill out the fields");
    }
  };
  return (
    <section className="create-recipe-page">
      <GoBackNav />

      <h2>Tell us about your next masterpiece</h2>

      <img
        className="logo-pic"
        src="https://firebasestorage.googleapis.com/v0/b/recipes102030.appspot.com/o/Application%20Images%2FLogo2.png?alt=media&token=4ec6254f-4373-47d9-b85e-74f9ccb27a12"
        alt=""
      />

      <form className="create-recipe-form">
        <div className="form-holder" />
        <div>
          <legend>
            <label className="text" htmlFor="title">
              Title
            </label>
          </legend>
          <input
            className="input"
            type="text"
            id="title"
            placeholder="Give your masterpiece a name"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
          />
        </div>
        <br />
        <div>
          <legend>
            <label htmlFor="title">Image</label>
          </legend>
          <input
            className="input"
            type="url"
            id="image"
            placeholder="Paste the Image URL here"
            onChange={(event) => {
              setImageURL(event.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <legend>
            <label htmlFor="description">Description</label>
            <h4 className="create-recipe-legend-small-text">
              Each step of the instructions must be a single sentance and needs
              to end with a "."
            </h4>
          </legend>
          <textarea
            rows="5"
            className="input descriptInput"
            id="title"
            placeholder="Introduce your recipe, add notes, cooking tips etc."
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            required
          ></textarea>
        </div>
        <br />
        <div>
          <legend>
            <label htmlFor="title">Ingredients</label>
            <h4 className="create-recipe-legend-small-text">
              The ingredients must be separated by spaces
            </h4>
          </legend>
          <input
            className="input"
            type="text"
            id="title"
            placeholder="Add one or paste multiple ingredients."
            onChange={(event) => {
              setIngredients(event.target.value.split(" "));
            }}
            required
          />
        </div>
        <br />
        <div>
          <legend>
            <label htmlFor="title">Difficulty</label>
          </legend>
          <select
            className="input"
            type="text"
            id="title"
            placeholder="Add one or paste multiple ingredients."
            onChange={(event) => {
              setDifficulty(event.target.value);
            }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <br />
        <div>
          <legend>
            <label htmlFor="title">Instructions</label>
            <h4 className="create-recipe-legend-small-text">
              Each step of the instructions must be a single sentance and needs
              to end with a "."
            </h4>
          </legend>
          <textarea
            rows="5"
            className="create-recipe-instructions-area input descriptInput"
            placeholder="Guide us how to cook it"
            onChange={(event) => {
              setInstructions(event.target.value.split(/[.,!,?]/));
            }}
            required
          />
        </div>
        <div className="recipe-specifications">
          <div>
            <legend>
              <label className="text" htmlFor="price">
                Price (DKK)
              </label>
            </legend>
            <input
              className="input recipe-spec-input"
              type="number"
              id="price"
              placeholder="Tell us how much did you pay (dkk)"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div>
            <legend>
              <label className="text" htmlFor="time">
                Time
              </label>
            </legend>
            <input
              className="input recipe-spec-input"
              type="number"
              step="5"
              id="time"
              placeholder="Tell us how much time did it take you? (minutes)"
              onChange={(event) => {
                setTime(event.target.value);
              }}
            />
          </div>
        </div>
        <br />
        <br />
        <button
          type="submit"
          className="create-recipe-commit-btn"
          onClick={CommitRecipe}
        >
          Commit
        </button>
      </form>
    </section>
  );
}
