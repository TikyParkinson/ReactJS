//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// FC
const PrimeraApp = ({ saludo, edad }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi Primera Aplicacion {edad}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
};

export default PrimeraApp;
