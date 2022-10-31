
import React, { useEffect, useState} from 'react';
import CategoryCard from "../components/CategoryCard"

export default function CategortList () {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const url = "https://recipes102030-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
            const response = await fetch(url);
            const data = await response.json();
            const categoriesArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setCategories(categoriesArray);
        }
        getCategories();
    }, []);

    

return(

    <div className="categories-list-container">
    {categories.map(category => (
   <CategoryCard category={category} key={category.id} />
     ))}
    </div>

)
    
}






// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { db } from "../../../firebaseConfig";
// function CategoryList () {
//     const [loading, setLoading] = useState(true);
//     const [currentPost, setCurrentPost] = useState({});
//     let { slug } = useParams();


//     useEffect(() => {

//         const fetchData = async() => {

//             try {

//                 const response = await db.firestore().collection("categories")
//                     .doc(slug)
//                     .get();

//                 console.log('response', response);

//                 let data = { title: 'not found' };

//                 if (response.exists) {
//                     data = response.data();
//                 }

//                 setCurrentPost(data);
//                 setLoading(false);

//             } catch(err) {
//                 console.error(err);
//             }

//         };

//         fetchData();

//     }, []);

//     return (
//         <div>

//             {!loading && currentPost.title}


//         </div>
//     )

// };
// export default CategoryList;


   