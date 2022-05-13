const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = ( precio * porcentajePrecioConDescuento ) / 100;
  return precioConDescuento;
}

function getDiscount() {
  const price = parseInt(document.getElementById("inputPrice").value);
  const discount = parseInt(document.getElementById("inputDiscount").value);
  const message = document.getElementById("resultDiscount");
  const totalResult = calcularPrecioConDescuento(price,discount);
  message.innerText = `tu resultado es: ${totalResult}$`;
}