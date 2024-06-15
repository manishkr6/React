const ErrorMessage = ({items}) => {
  return <>
  {/* // Using logical operator */}
  {items.length === 0 && <h3>I am still Hungry.</h3>}
  </>
};

export default ErrorMessage;
