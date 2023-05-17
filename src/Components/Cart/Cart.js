import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const CartHandler = () => {
    props.onClose();
  };
  const cartItemAddHandler = (item) => {
    cartctx.AddItem({ ...item, Quantity: 1 });
  };

  const cartItemremoveHandler = (id) => {
    cartctx.removeItem(id);
  };
  
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          items={item.items}
          Quantity={item.Quantity}
          price={item.price}
          onRemove={cartItemremoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"]} onClick={CartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
