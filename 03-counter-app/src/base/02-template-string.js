const nombre = 'Antonio';
const apellido = 'Ruiz';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = 'Juan') {
  return 'Hola ' + nombre;
}
