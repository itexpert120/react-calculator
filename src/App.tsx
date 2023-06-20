import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  function handleSignChange() {
    if (display === "") return;
    const parsedDisplay = eval(display);
    const newDisplay = (-1 * parsedDisplay).toString();
    setDisplay(newDisplay);
  }

  function handlePercentage() {
    const percentageValue = parseFloat(display) / 100;
    setDisplay(percentageValue.toString());
  }

  function handleOperation(op: string) {
    setDisplay(display + " " + op + " ");
  }

  function handleEquals() {
    const expression = display.replace(/×/g, "*").replace(/÷/g, "/");
    const result = eval(expression).toString();
    setDisplay(result);
  }

  function handleDigit(digit: string) {
    setDisplay(display + digit);
  }

  return (
    <>
      <div className="wrapper text-white bg-black">
        <div className="calc">
          <div className="display-text">
            <h1 className="text-right">
              <span className="opacity-0">{"."}</span>
              {display === "" ? "0" : display}
            </h1>
          </div>

          <div className="buttons-container">
            <div className="buttons top-row">
              <button onClick={() => setDisplay("")}>AC</button>
              <button onClick={handleSignChange}>+/-</button>
              <button onClick={handlePercentage}>%</button>
              <button onClick={() => handleOperation("÷")}>÷</button>
            </div>
            <div className="buttons">
              <button onClick={() => handleDigit("7")}>7</button>
              <button onClick={() => handleDigit("8")}>8</button>
              <button onClick={() => handleDigit("9")}>9</button>
              <button onClick={() => handleOperation("×")}>×</button>
            </div>
            <div className="buttons">
              <button onClick={() => handleDigit("4")}>4</button>
              <button onClick={() => handleDigit("5")}>5</button>
              <button onClick={() => handleDigit("6")}>6</button>
              <button onClick={() => handleOperation("-")}>-</button>
            </div>
            <div className="buttons">
              <button onClick={() => handleDigit("1")}>1</button>
              <button onClick={() => handleDigit("2")}>2</button>
              <button onClick={() => handleDigit("3")}>3</button>
              <button onClick={() => handleOperation("+")}>+</button>
            </div>
            <div className="buttons bottom-row">
              <button onClick={() => handleDigit("0")}>
                &nbsp;&nbsp;&nbsp;0
              </button>
              <button onClick={() => handleDigit(".")}>.</button>
              <button onClick={handleEquals}>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
