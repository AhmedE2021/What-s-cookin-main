import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Importing Pages////////Ahmed///////
import Home from "./pages/home/Home";
import Landing from "./pages/onboarding/Landing";
import Landing2 from "./pages/onboarding/Landing2";
import Landing3 from "./pages/onboarding/Landing3";
import Landing4 from "./pages/onboarding/Landing4";
import List from "./pages/list/List";
import Discount from "./pages/discount/Discount";
import Profile from "./pages/profile/Profile";
import InRecipe from "./pages/InRecipe/InRecipe";
import SearchRecipe from "./pages/home/SearchRecipe";
import RecipeSearchResult from "./pages/home/components/RecipeSearchResult";
import CategoryResult from "./pages/home/CategoryResult"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/whats-cookin/" element={<Landing />} />
        <Route path="/landing2" element={<Landing2 />} />
        <Route path="/landing3" element={<Landing3 />} />
        <Route path="/landing4" element={<Landing4 />} />
       
        <Route path="/home" element={<Home />} />
        <Route path="/search-recipe" element={<SearchRecipe/>}/>
        <Route path="/search-result" element={<RecipeSearchResult/>}/>
        <Route path="/category-result" element={<CategoryResult/>}/>
        <Route path="/list" element={<List />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/InRecipe" element={<InRecipe />} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
