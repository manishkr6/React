import css from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  
  return (
<li className={`${css["mg-item"]}
  list-group-item ${bought && "active"}`}>
      <span className={css["mg-span"]}>{foodItem}</span> <button className={`${css.button} btn btn-info`}
      onClick={handleBuyButton}
      >Buy</button>
    </li>
  );
};

export default Item;