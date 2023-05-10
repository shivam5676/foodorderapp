import { Fragment } from "react";
import mealsimage from "../../Assests/Meal.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealSummary from "../Meals/MealSummary";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>Shivam Meal</h3>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage}></img>
      </div>
      <MealSummary></MealSummary>
    </Fragment>
  );
};
export default Header;
