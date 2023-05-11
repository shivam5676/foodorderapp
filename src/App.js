import Header from "./Components/Layout/Header";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [Cartisvalid, setCartisvalid] = useState(false);
  const CallCart = () => {
    setCartisvalid(true);
    
  };
  const closeCartHandler = () => {
    setCartisvalid(false);
  };
  return (
    <div>
      {Cartisvalid ? <Cart onClose={closeCartHandler}></Cart> : ""}
      <Header onCartShow={CallCart}></Header>
      <MealList></MealList>
    </div>
  );
}

export default App;
