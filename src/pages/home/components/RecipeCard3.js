import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function RecipeCard3({ recipe }) {
    const navigate = useNavigate();

   
    
    const [id, setId] = useState(recipe.id)
    const [price, setPrice] = useState(recipe.price)
    const [time, setTime] = useState(recipe.time)
    const [image, setImage] = useState(recipe.image)
    const [name, setName] = useState(recipe.name)
    const [difficulty, setDifficulty] = useState(recipe.difficulty)
    const [rating, setRating] = useState(recipe.rating)



    useEffect(() => {
        setId(recipe.id);
        setPrice(recipe.price)
        setTime(recipe.time)
        setImage(recipe.image)
        setName(recipe.name)
        setDifficulty(recipe.difficulty)
        setRating(recipe.rating)


      }, [recipe]);
    

   function handleClick() {
    navigate("/InRecipe", {
        state: {
            id: id,
            price: price, 
            time: time,
            image: image,
            name: name,
            difficulty: difficulty,
            rating: rating,

        }
    } 
    )

    }

    

    return (
        <article className="recipecard3" onClick={handleClick}>
           
            <img src={recipe.image} alt={recipe.title} />
            <div className="card-bottom3" >
            <h2>{recipe.title}</h2>
            <div className="card-dtls card-dtls3">
                <p>{recipe.price}</p>
                <p>{recipe.time}</p>
                <p>{recipe.difficulty}</p>
                <p>🌟{recipe.rating}</p>
            </div>
            </div>
           
           
        </article>
    );}