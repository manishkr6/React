import style from "./App.module.css";
import ButtonsComponents from "./component/ButtonsComponents";
import Display from "./component/Display";

function App() {
  return (
    <div className={style.calculator}>
      <Display/>
      <ButtonsComponents/>
    </div>
  );
}

export default App;
