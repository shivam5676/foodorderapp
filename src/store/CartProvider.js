import CartContext from "./CartContext";

const CartProvider = (props) => {
  const AddItemHandler = (food) => {};
  const RemoveItemHandler = (id) => {};
  // cart context helper will send all the details to cartcontext using value u can see context video for value and related que video 14 in cycle assignment
  const cartContextHelper = {
    food: [],
    TotalAmount: 0,
    addItem: AddItemHandler,
    removeItem: RemoveItemHandler,
  };
  return (
    <CartContext.Provider value={cartContextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
// now we can use this where we want to use prop value without long prop chain