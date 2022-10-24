import NavBar from "../../components/NavBar";
import SLNavBar from "./components/SLnavBar";
import { Routes, Route } from "react-router-dom";
import ShoppingListPage from "./Pages/ShoppingList";
import StockList from "./Pages/StockList";

export default function List2() {
  return (
    <div>
      <Routes>
        <Route path="/shopping" element={<ShoppingListPage />} />
        <Route path="/stock" element={<StockList />} />
      </Routes>
    </div>
  );
}
