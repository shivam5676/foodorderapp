import { useContext } from "react";
import AddMealForm from "./AddMealForm";
import classes from "./MealItem.module.css";
import CartContext from "../../store/CartContext";
const MealItem = (props) => {
  const cartctx=useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const itemOrderData=(OrderQuantity)=>{
    cartctx.AddItem({
      id:props.id,
      items:props.items,
      Quantity: OrderQuantity,
      price:props.price
    })
    
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.items}</h3>
        <div className={classes.description}>{props.details}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <AddMealForm OrderQuantity={itemOrderData}></AddMealForm>
      
    </li>
  );
};
export default MealItem;
