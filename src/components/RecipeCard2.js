import { useNavigate } from "react-router-dom";


export default function RecipeCard2({ recipe }) {
    const navigate = useNavigate();
    
       
    

    return (
        <article className="recipecard2" onClick={() => navigate(recipe.slug)}>
           
            <img src={recipe.image} alt={recipe.name} />
            <div className="card-bottom2" >
            <h2>{recipe.name}</h2>
            <div className="card-dtls card-dtls2">
                <p>{recipe.price}</p>
                <p>{recipe.time}</p>
                <p>{recipe.difficulty}</p>
            </div>
            </div>
           
           
        </article>
    );}