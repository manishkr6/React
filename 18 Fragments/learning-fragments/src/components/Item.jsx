import css from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
<li className={`${css["mg-item"]} list-group-item`}>
      <span className={css["mg-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;