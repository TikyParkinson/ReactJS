import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp saludo='Hola Juan' edad={23} />, divRoot);
