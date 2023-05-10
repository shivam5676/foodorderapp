import React from "react";
import Card from "../UI/Card";
import classes from "./AddMeal.module.css";
import MealItem from "./MealItem";

const AddMeal = (props) => {
  const MealList = props.items.map(
    (meal) => (
      <MealItem
      key={meal.id}
        food={meal.food}
        details={meal.details}
        price={meal.price}
      ></MealItem>
    ))
  
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};
export default AddMeal;
