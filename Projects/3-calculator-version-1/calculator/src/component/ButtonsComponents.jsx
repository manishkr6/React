import style from "./ButtonsComponents.module.css";

const ButtonsComponents = () => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonContainer}>
      {ButtonNames.map((buttonName) => (
        <button className={style.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsComponents;
