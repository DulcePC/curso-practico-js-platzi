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
getMediana([100,
  200,
  500,
  400000000,
  10,
  90]);