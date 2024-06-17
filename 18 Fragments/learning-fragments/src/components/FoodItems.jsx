import Item from "./Item"
const foodItems = ({items}) => {

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key = {item} foodItem = {item} handleBuyButton={() => console.log(`${item} bought`)}></Item>
      ))}
    </ul>
  );
};

export default foodItems;
