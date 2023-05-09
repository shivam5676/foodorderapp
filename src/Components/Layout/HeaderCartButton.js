import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css"
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span >your cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};
export default HeaderCartButton;
