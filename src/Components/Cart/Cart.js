import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
const Cart = (props) => {
const cartctx=useContext(CartContext);
const totalAmount=`$${cartctx.totalAmount.toFixed(2)}`

  const CartHandler = () => {
    props.onClose();
  };
  const Cartitems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((items) => (
        <li key={items.id}>{items.items}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {Cartitems}
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
