import { useState } from "react";
import Input from "../UI/Input";
import classes from "./AddMealForm.module.css";
const AddMealForm = ( props) => {
  const [formData, setformData] = useState("");
  const inputHandler = (event) => {
    setformData(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    // props.OrderQuantity(+formData);
    console.log("formData:", formData); // Check the value before conversion
    const convertedValue = +formData;
    console.log("convertedValue:", convertedValue); // Check the converted value
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
