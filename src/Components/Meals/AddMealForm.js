import { useState } from "react";
import Input from "../UI/Input";
import classes from "./AddMealForm.module.css";
const AddMealForm = (props) => {
  const [formData, setformData] = useState("");
  const inputHandler = (event) => {
    setformData(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (formData < 1 || formData > 5 || formData.length == 0) {
      return;
    }

    const convertedValue = +formData;

    props.OrderQuantity(convertedValue);
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: 0,
          max: 5,
          onChange: inputHandler,
        }}
      ></Input>
      <button>+ ADD</button>
    </form>
  );
};
export default AddMealForm;
