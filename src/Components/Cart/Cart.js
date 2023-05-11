import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {

  
  const CartHandler=()=>{

props.onClose();
  }
  const Cartitems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "1",
          food: "paneer masala",
          details: "spicy n tasty",
          amount: 2,
          price: 12.99,
        },
      ].map((items) => (
        <li key={items.id}>{items.food}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>{Cartitems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>23.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"] } onClick={CartHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div></Modal>
    
  );
};
export default Cart;
