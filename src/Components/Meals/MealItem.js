import AddMealForm from "./AddMealForm";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.food}</h3>
        <div className={classes.description}>{props.details}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <AddMealForm></AddMealForm>
      
    </li>
  );
};
export default MealItem;
