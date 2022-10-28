import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);
  const [result, setResult] = useState();
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
    } else {
      setResult((value * (9/5)) + 32);
      setTempShow("°F");
  };
}

  return (
    <div className="App">
      <label>
        <input type="number" name="number" onChange={handleChange} />
      </label>
      <div>
        <select onChange={handleSelectOption}>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="celsius">Celsius</option>
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <p>Result: {result} {tempShow}</p>
    </div>
  );
}

export default App;
