const ErrorMessage = ({items}) => {
    // Using if statement
  // if (foodItems.length === 0) {
  //   return <h3>I am still Hungry!!</h3>
  // }

  //Using Ternary operator
  // let emptyMessage  = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null

  return <>
  {/* // Using logical operator */}
  {items.length === 0 && <h3>I am still Hungry.</h3>}
  </>
};

export default ErrorMessage;
