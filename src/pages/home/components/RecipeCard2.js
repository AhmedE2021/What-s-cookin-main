import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeCard2({ CheapestRecipe }) {
    const navigate = useNavigate();
    
   

    const [id, setId] = useState(CheapestRecipe.id)
    const [price, setPrice] = useState(CheapestRecipe.price)
    const [time, setTime] = useState(CheapestRecipe.time)
    const [image, setImage] = useState(CheapestRecipe.image)
    const [name, setName] = useState(CheapestRecipe.name)
    const [difficulty, setDifficulty] = useState(CheapestRecipe.difficulty)
    const [rating, setRating] = useState(CheapestRecipe.rating)



    useEffect(() => {
        setId(CheapestRecipe.id);
        setPrice(CheapestRecipe.price)
        setTime(CheapestRecipe.time)
        setImage(CheapestRecipe.image)
        setName(CheapestRecipe.name)
        setDifficulty(CheapestRecipe.difficulty)
        setRating(CheapestRecipe.rating)


      }, [CheapestRecipe]);
    

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
        <article className="recipecard2" onClick={handleClick}>
           
            <img src={CheapestRecipe.image} alt={CheapestRecipe.name} />
            <div className="card-bottom2" >
            <h2>{CheapestRecipe.name}</h2>
            <div className="card-dtls card-dtls2">
                <p>{CheapestRecipe.price}</p>
                <p>{CheapestRecipe.time}</p>
                <p>{CheapestRecipe.difficulty}</p>
            </div>
            </div>
           
           
        </article>
    );}