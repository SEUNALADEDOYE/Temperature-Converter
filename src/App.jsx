// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputTemp, setInputTemp] = useState('');
  const [inputScale, setInputScale] = useState('Celsius');
  const [outputTemp, setOutputTemp] = useState('');
  const [outputScale, setOutputScale] = useState('Fahrenheit');
 
  const handleInputTempChange = (e) => {
    setInputTemp(e.target.value);
  };
  const handleInputScaleChange = (e) => {
    setInputScale(e.target.value);
  };

  const handleOutputScaleChange = (e) => {
    setOutputScale(e.target.value);
  };
  const result = (e) =>{
    e.preventDefault();
    let convertedTemp;
  if (inputScale==='Celsius'&& outputScale==='Fahrenheit'){
   convertedTemp=(inputTemp * 9/5)+ 32 ;
  } else if (inputScale === 'Fahrenheit' && outputScale === 'Celsius') {
    convertedTemp = (inputTemp - 32) * 5/9;
  }

  setOutputTemp(convertedTemp);
  };
  const clearFields = (e) => {
    e.preventDefault();
    setInputTemp('');
    setOutputTemp('');
  };

  return (
    <div className='outside'>
    <div className='outer'>
  <form>
    <h1>Temperature Converter</h1>
    <div className='writing'>
    <h2>From</h2>
    <h2>To</h2>
    </div>

    <div className='f-row'>
   <select name="" id="f-checkbox" value={inputScale} onChange={handleInputScaleChange}>
    <option  value='Celsius'>Celsius</option>
    <option  value='Fahrenheit'>Fahrenheit</option>
   </select>
   
   <select name='' id='s-checkbox' value={outputScale} onChange={handleOutputScaleChange}>
    <option  value='Fahrenheit'>Fahrenheit</option>
    <option  value='Celsius'>Celsius</option>
   </select>
   </div>
   <h2>Input Temperature</h2>
   <input type='number'className='t-checkbox' value={inputTemp}  onChange={handleInputTempChange} placeholder='Enter Temperature'/>
   <h2>Result: {outputTemp} </h2>
   <div className='buttons'>
   <button onClick={result}>Convert</button>
   <button className='clear-btn' onClick={clearFields}>Clear</button>
   </div>
   
  </form>
  </div>
  </div>
  );
};
export default App;
