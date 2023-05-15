import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState({
    items: [],
    totalAmount: 0
  });
  const addItemToCartHandler = (item) => {
    setCartState((prevState) => {
      const updatedItems = prevState.items.concat(item);
      const updatedTotalAmount = prevState.totalAmount + item.price * item.Quantity;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    });
  };

  const RemoveItemfromCartHandler = (id) => {};
  // cart context helper will send all the details to cartcontext using value u can see context video for value and related que video 14 in cycle assignment
  const cartContextHelper = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    
    AddItem: addItemToCartHandler,
    removeItem: RemoveItemfromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
// now we can use this where we want to use prop value without long prop chain