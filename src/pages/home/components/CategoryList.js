
import React, { useEffect, useState} from 'react';
import CategoryCard from "../components/CategoryCard"
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";



export default function CategortList () {

    const [categories, setCategories] = useState([]);
    
    const categoriesCollectionRef = collection(db, "categories");
  
    useEffect(() => {
      const getCategories = async () => {
        const data = await getDocs(categoriesCollectionRef);
        setCategories(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };

           getCategories();
     }, []);
  

return(

     <div className='categoriesList'>
    
     <h2 className='categoriesList-h2'>Categories</h2>
    <div className="categories-list-container">
    {categories.map(category => (
   <CategoryCard category={category} key={category.id} />
     ))}
    </div>
    </div>
)
    
}






