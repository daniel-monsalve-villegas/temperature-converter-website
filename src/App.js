import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [optionConvert, setOptionConvert] = useState("fahrenheit");
  const [tempShow, setTempShow] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelectOption = (event) => {
    event.preventDefault();
    setOptionConvert(event.target.value);
    console.log(event.target.value);
  };

  const handleConvert = () => {
    if(optionConvert === 'fahrenheit') {
      setResult((value - 32) * (5/9));
      setTempShow("°C");
    } else if(optionConvert === 'celsius'){
      setResult((value * (9/5)) + 32);
      setTempShow("°F");
    } else {
      setResult(value - 273.15);
      setTempShow("°C");
    }
  }

  return (
    <div className="App">
      <section id="operation">
        <p>Degrees</p>
        <label>
          <input type="number" name="number" onChange={handleChange} /> 
        </label>
        <p id="typeTemp">Type</p>
        <select onChange={handleSelectOption}>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="celsius">Celsius</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <button onClick={handleConvert}>Convert</button>
      </section>
      <section id="result">
        <p>Result</p>
        <h2>{Number.parseFloat(result).toFixed(2)} {tempShow}</h2>
      </section>
    </div>
  );
}

export default App;
