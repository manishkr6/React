import style from "./App.module.css";
import ButtonsComponents from "./component/ButtonsComponents";
import Display from "./component/Display";
import {useState} from "react"

function App() {
  const [calVal, setCalVal] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("")
    } else if (buttonText === '=') {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttonText
      setCalVal(newDisplayValue)
    }
  };

  return (
    <center>
    <div className={style.calculator}>
      <Display displayValue = {calVal}></Display>
      <ButtonsComponents onButtonClick={onButtonClick}/>
    </div>
    </center>
  );
}

export default App;
