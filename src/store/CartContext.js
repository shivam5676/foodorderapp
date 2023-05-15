import React from "react";
const CartContext = React.createContext({
  items: [],
  TotalAmount: 0,
  AddItem: (items) => {},
  removeItem: (id) => {},
});
export default CartContext;
