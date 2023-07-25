import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  function handleButtonClick(buttonValue) {
    setInputValue((prevInput) => prevInput + buttonValue);
  }

  function calculate() {
    const answer = eval(inputValue);
    setInputValue(answer.toString());
    setHistory((prevHistory) => [
      ...prevHistory,
      { inputValue: inputValue, answer: answer },
    ]);
  }

  function clear() {
    setInputValue("");
  }

  function showHideHistory() {
    if (showHistory === true) {
      setShowHistory(false);
    } else {
      setShowHistory(true);
    }
  }

  function deleteValue() {
    let arrayValue = inputValue.split("");
    arrayValue.pop();
    arrayValue = arrayValue.join("");
    console.log(arrayValue);
    setInputValue(arrayValue);
  }

  return (
    <div className="border border-black rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-md p-4">
      <div className="bg-white rounded-lg p-4">
        {showHistory > 0 && (
          <div>
            {history.map((value) => (
              <li>{`${value.inputValue} = ${value.answer}`}</li>
            ))}
          </div>
        )}

        <input
          type="text"
          className="w-full py-4  lg:py-7 border border-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md text-xl font-bold text-gray-800 text-right px-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => clear()}
          >
            AC
          </button>
          <button
            className="bg-white py-7 px-5  lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md "
            onClick={() => deleteValue()}
          >
            DEL
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md "
            onClick={() => showHideHistory()}
          >
            HIS
          </button>
          <button
            className="bg-white py-7 px-5  lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md "
            onClick={() => deleteValue()}
          >
            CL
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("*")}
          >
            *
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md "
            onClick={() => handleButtonClick("+")}
          >
            .
          </button>
          <button
            className="bg-white py-7 px-5 lg:py-7 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 hover:shadow-md"
            onClick={() => calculate()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
