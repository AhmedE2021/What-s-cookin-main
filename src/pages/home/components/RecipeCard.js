
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RecipeCard({ RecommendRecipe }) {
    const navigate = useNavigate();

    const [id, setId] = useState(RecommendRecipe.id)
    const [price, setPrice] = useState(RecommendRecipe.price)
    const [time, setTime] = useState(RecommendRecipe.time)
    const [image, setImage] = useState(RecommendRecipe.image)
    const [name, setName] = useState(RecommendRecipe.name)
    const [difficulty, setDifficulty] = useState(RecommendRecipe.difficulty)
    const [rating, setRating] = useState(RecommendRecipe.rating)




    useEffect(() => {
        setId(RecommendRecipe.id);
        setPrice(RecommendRecipe.price)
        setTime(RecommendRecipe.time)
        setImage(RecommendRecipe.image)
        setName(RecommendRecipe.name)
        setDifficulty(RecommendRecipe.difficulty)
        setRating(RecommendRecipe.rating)

      }, [RecommendRecipe]);
    




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
        <article className="recipecard" onClick={handleClick}>
           
            <img src={RecommendRecipe.image} alt={RecommendRecipe.name} />
            <div className="over-card-image">
            <span> 🌟</span>
            <p>{RecommendRecipe.rating}</p>
            </div>
            <div className="card-bottom" >
            <h2>{RecommendRecipe.name}</h2>
            <div className="card-dtls">
                <p>{RecommendRecipe.price}</p>
                <p>{RecommendRecipe.time}</p>
                <p>{RecommendRecipe.difficulty}</p>
            </div>
            </div>
           
           
        </article>
    );}