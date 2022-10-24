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
           
            <img src={recipe.image} alt={recipe.title} />
            <div className="card-bottom" >
            <h2>{recipe.title}</h2>
            <div className="card-dtls">
                <p>{recipe.price}</p>
                <p>{recipe.time}</p>
                <p>{recipe.difficulty}</p>
            </div>
            </div>
           
           
        </article>
    );}