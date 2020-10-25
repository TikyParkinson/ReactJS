import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo ./base/02-template-string.js', () => {
  test('Prueba en la Funcion getSaludo', () => {
    const nombre = 'Antonio';

    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);
  });

  test('getSaludo debe de retornar el valor por defecto si no contiene ningun argumento', () => {
    const saludo = getSaludo();

    expect(saludo).toBe('Hola Juan');
  });
});
