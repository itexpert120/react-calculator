import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operation, setOperation] = useState("");

  function handleSignChange() {
    const parsedDisplay = parseFloat(display);
    const newDisplay = (-1 * parsedDisplay).toString();
    setDisplay(newDisplay);
  }

  function handlePercentage() {
    const percentageValue = parseFloat(display) / 100;
    setDisplay(percentageValue.toString());
  }

  function handleOperation(op: string) {
    setOperation(op);
    setOperand1(display);
    setDisplay("");
  }

  function handleEquals() {
    setOperand2(display);
    const expression = operand1 + operation + operand2;
    const result = eval(expression).toString();
    setDisplay(result);
    setOperand1("");
    setOperand2("");
    setOperation("");
  }

  useEffect(() => {
    if (operation !== "") setOperand2(display);
  }, [display, operand1, operand2, operation]);

  function handleDigit(digit: string) {
    setDisplay(display + digit);
  }

  return (
    <>
      <h1 className="text-white font-bold">CALCULATOR</h1>
      <div className="flex flex-col justify-center items-center my-5 shadow-lg rounded-xl">
        <div className="text-[#e1e1e2] bg-[#444748] rounded-xl overflow-hidden">
          <h1 className="max-w-[256px] overflow-x-scroll whitespace-nowrap margin-r-0 text-right pr-2 no-scrollbar">
            <span className="opacity-0">{"."}</span>
            {display === "" ? "0" : display}
          </h1>

          <div className="buttons top-row">
            <button onClick={() => setDisplay("")}>C</button>
            <button onClick={handleSignChange}>+/-</button>
            <button onClick={handlePercentage}>%</button>
            <button onClick={() => handleOperation("/")}>÷</button>
          </div>
          <div className="buttons">
            <button onClick={() => handleDigit("7")}>7</button>
            <button onClick={() => handleDigit("8")}>8</button>
            <button onClick={() => handleDigit("9")}>9</button>
            <button onClick={() => handleOperation("*")}>×</button>
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
            <button onClick={() => handleDigit("0")}>0</button>
            <button onClick={() => handleDigit(".")}>.</button>
            <button onClick={handleEquals}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
