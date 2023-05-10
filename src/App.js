import Header from "./Components/Layout/Header";
import MealList from "./Components/Meals/MealList";
import MealSummary from "./Components/Meals/MealSummary";
import Cart from "./Components/Cart/Cart"
function App() {
  return (
    <div>
      <Cart></Cart>
      <Header></Header>
      <MealList></MealList>
    </div>
  );
}

export default App;
