import React, { useState } from "react";
import krNumbers from "kr-numbers";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [spacing, setSpacing] = useState(false);
  const [mixed, setMixed] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    const isInteger = Number.isInteger(Number(value));
    const isExceededMax = Number(value) > 9999999999999998;

    if (isInteger && !isExceededMax) {
      setText(value);
    }
  };

  return (
    <div className="App">
      <h1> kr-numbers.js </h1>
      <h2> $ npm install kr-numbers --save </h2>
      <input
        type="text"
        placeholder="Input numbers here"
        onChange={handleChange}
        value={text}
      />
      <div className="checkbox-wrapper">
        <input
          id="spacing"
          type="checkbox"
          onChange={() => setSpacing(!spacing)}
        />
        <label htmlFor="spacing">Spacing</label>

        <input id="mixed" type="checkbox" onChange={() => setMixed(!mixed)} />
        <label htmlFor="mixed">Mixed</label>
      </div>
      <div className="result">
        {krNumbers(Number(text), { spacing, mixed }) ||
          "Please input your numbers"}
      </div>
    </div>
  );
}

export default App;
