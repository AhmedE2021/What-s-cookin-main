import { useNavigate } from "react-router-dom";

import React, { useEffect, useState} from 'react';




export default function CategoryCard ({category}){
    const navigate = useNavigate();
    
    const [name, setName] = useState();

    useEffect(() => {
      setName(category.name);
    
    }, [category]);

    function handleClick() {
      navigate("/category-result", {
        state: {
          name: name,
        },
      });
    }


    return(

<article className="category-card" onClick={handleClick}>
    <h2>{category.name}</h2>
</article>

    )
}