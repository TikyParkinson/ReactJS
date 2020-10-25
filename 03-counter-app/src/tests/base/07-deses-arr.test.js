import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en Desestructuracion', () => {
  test('Debe de retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo();

    expect(typeof letras).toBe('string');
    expect(typeof numeros).toBe('number');
  });

  test('No Debe de retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo();

    expect(typeof numeros).not.toBe('string');
    expect(typeof letras).not.toBe('number');
  });
});
