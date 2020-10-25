//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// FC
const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <p>{value}</p>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
