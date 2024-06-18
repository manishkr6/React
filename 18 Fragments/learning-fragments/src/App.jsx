import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetable",
    "Roti",
  ]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>

        {/* <p>{textToShow}</p> */}

        <FoodItems items={foodItems}></FoodItems>

        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>

      <Container>
        <p>Above is the list of helathy food items</p>
      </Container>
    </>
  );
}

export default App;

// 5:32
