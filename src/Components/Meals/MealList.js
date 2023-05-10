import AddMeal from "./AddMeal";

const MealList = () => {
  const DummyList = [
    { id: "1", food: "Aloo bhurji", details: "spicy", price: 99 },
    { id: "2", food: "paneer Masala", details: "spicy", price: 99 },
    { id: "3", food: "dal tadka", details: "spicy", price: 99 },
  ];
  return <AddMeal items={DummyList}></AddMeal>;
};
export default MealList;
