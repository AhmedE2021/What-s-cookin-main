import { useNavigate } from "react-router-dom";


export default function CategoryCard({ category }) {
    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`recipes/${category.id}`);
    }

    return (
        <article onClick={handleClick}>
           
       
            <div className="category-card" >
            <h2>{category.title}</h2>
            </div>
           
           
        </article>
    );}