import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas de 05-funciones.js', () => {
  test('Debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('Debe retornar un objeto activo', () => {
    const nombre = 'Juan';
    const usuarioActivoTest = {
      uid: 'ABC567',
      username: nombre,
    };

    const userActivo = getUsuarioActivo(nombre);

    expect(userActivo).toEqual(usuarioActivoTest);
  });
});
