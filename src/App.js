import Header from "./Components/Layout/Header";
import MealList from "./Components/Meals/MealList";

import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [Cartisvalid, setCartisvalid] = useState(false);
  const CallCart = () => {
    setCartisvalid(true);
  };
  const closeCartHandler = () => {
    setCartisvalid(false);
  };
  return (
    <CartProvider>
      {Cartisvalid ? <Cart onClose={closeCartHandler}></Cart> : ""}
      <Header onCartShow={CallCart}></Header>
      <MealList></MealList>
    </CartProvider>
  );
}

export default App;
