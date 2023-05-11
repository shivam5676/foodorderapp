import AddMeal from "./AddMeal";

const MealList = () => {
  const DummyList = [
    { id: "1", food: "CHILLI POTATO", details: "Spicy n tasty", price: 199 },
    {
      id: "2",
      food: "Paneer Masala",
      details: "Delicious with buttery taste",
      price: 99,
    },
    { id: "3", food: "DAL FRY", details: "Spicy and Delicious", price: 109 },
    {
      id: "4",
      food: "SEV ",
      details: "Delicious with buttery taste",
      price: 99,
    },
    { id: "5", food: "FRIED RICE", details: "enjoy special Rice", price: 19 },
  ];
  return <AddMeal items={DummyList}></AddMeal>;
};
export default MealList;
