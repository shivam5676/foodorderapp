import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = () => {
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
        <li>{items.food}</li>
      ))}
    </ul>
  );
  return (
    <Modal>{Cartitems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>23.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div></Modal>
    
  );
};
export default Cart;
