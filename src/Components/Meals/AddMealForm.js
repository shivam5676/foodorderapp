import Input from "../UI/Input";
import classes from "./AddMealForm.module.css";
const AddMealForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{ type: "number", id: "amount", min: 0, max: 5 }}
      ></Input>
      <button>+ ADD</button>
    </form>
  );
};
export default AddMealForm;
