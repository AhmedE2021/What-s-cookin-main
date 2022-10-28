import { useNavigate } from "react-router-dom";


export default function RecipeCard({ recipe }) {
    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`recipes/${recipe.id}`);
    }

    return (
        <article className="recipecard" onClick={handleClick}>
           
            <img src={recipe.image} alt={recipe.name} />
            <div className="over-card-image">
            <span> 🌟</span>
            <p>{recipe.rating}</p>
            </div>
            <div className="card-bottom" >
            <h2>{recipe.name}</h2>
            <div className="card-dtls">
                <p>{recipe.price}</p>
                <p>{recipe.time}</p>
                <p>{recipe.difficulty}</p>
            </div>
            </div>
           
           
        </article>
    );}