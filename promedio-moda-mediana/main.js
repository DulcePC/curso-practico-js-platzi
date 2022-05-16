//Mediana
function calcularMedia(lista) {
  // const sumaLista = lista.reduce(
  //   function ( valorAcumulado = 0, nuevoElemento) {
  //     return valorAcumulado + nuevoElemento;
  //   }
  // );
  // const promedioLista = sumaLista / lista.length;
  // return promedioLista;
}

//Test
const lista1 = [
  100,
  400,
  10,
  800
]

const mitadLista1  = parseInt(lista1.length / 2);
let mediana;

function esPar(numerito) {
  if(numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if(esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1];
  const elemento2 = lista1[mitadLista1 - 1];
  const promedioElemento1y2 = calcularMedia([elemento1,elemento2]);
  media = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}