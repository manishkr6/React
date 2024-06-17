import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // Using if statement
  // if (foodItems.length === 0) {
  //   return <h3>I am still Hungry!!</h3>
  // }

  //Using Ternary operator
  // let emptyMessage  = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <ErrorMessage items={foodItems}></ErrorMessage>

        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the list of helathy food items</p>
      </Container>
    </>
  );
}

export default App;

// 3:32
