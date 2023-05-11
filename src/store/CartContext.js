import React from "react";
const CartContext=React.createContext({
  food: [],
  TotalAmount: 0,
  AddItem: (food) => {},
  removeItem: (id) => {},
});
export default CartContext;