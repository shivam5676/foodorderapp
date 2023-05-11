import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css"
import CartContext from "../../store/CartContext";
const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  const numberofCartItems=cartCtx.food.reduce((currentnumber,item0)=>{
    return currentnumber+food.amount
  },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span >your cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
