import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);
  const [result, setResult] = useState();
  const [optionConvert, setOptionConvert] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //const handleConvert = () => {
    //setCelsius(value - 273.15);
  //};

  const handleSelectOption = (event) => {
    setOptionConvert(event.target.value);
  };

  const handleConvert = () => {
    if(optionConvert === 'fahrenheit') {
      setResult((value - 32) * (5/9));
    } else {
      setResult(value - 273.15)
    }
  };


  return (
    <div className="App">
      <label>
        <input type="number" name="number" onChange={handleChange} />
      </label>
      <div>
        <select onChange={handleSelectOption}>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="celsius">Kelvin</option>
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <p>Result: {result} result</p>
    </div>
  );
}

export default App;
