import { useNavigate } from "react-router-dom";


export default function RecipeCard3({ recipe }) {
    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`recipes/${recipe.id}`);
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