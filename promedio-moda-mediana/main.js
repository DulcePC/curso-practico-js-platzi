//Mediana
function getMediana(list) {
  list.sort(function(a,b){return a - b});
  let middleItem = parseInt(list.length / 2);
  if (list.length % 2 === 0) {
    const firstElement = list[middleItem];
    const secondElement = list[middleItem - 1];
    return console.log((firstElement + secondElement) / 2);
  } else {
    return console.log(list[middleItem]);
  }
}
getMediana([100,200,500,400000000,10,90]);

//Promedio
function getPromedio(list) {
  let totalElementsArray = list.reduce((total, totalAcumulado) => total + totalAcumulado)
  let resultado = totalElementsArray / list.length;
  return console.log(resultado)
}
getPromedio([100,200,300,500]);

//moda
function getModa(list) {
  var ordernar = list.sort(function(a,b){return a - b});
  console.log(ordernar);
  // resultado = ordernar.filter(function(numero,posicion,numeros){
  //   return console.log(posicion === numeros.indexOf(numero));
  // })
  
}
getModa([1,2,2,4,14,14,100,200,500,400,10,10,90]);
// map cuando queremos obtener un nuevo array de otra cosa ( osea del array que le pasemos)