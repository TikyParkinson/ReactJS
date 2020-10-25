import React, { useState } from 'react';
import PropTypes from 'prop-types';

// FC
const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = (e) => setCounter((c) => c + 1);
  const handleSubstract = (e) => setCounter((c) => c - 1);
  const handleReset = (e) => setCounter((c) => value);

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
