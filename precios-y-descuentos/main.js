const coupons = [
  {
    couponName: "dulce_cupon",
    discount: 40
  },
  {
    couponName: "luis_cupon",
    discount: 10
  },
  {
    couponName: "kation_cupon",
    discount: 90
  }
];
const containerInputDiscount = document.getElementById("userHasCoupon");
const message = document.getElementById("resultDiscount");
const mensajeDeError = document.getElementById("error");
let tieneCupon = false;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = ( precio * porcentajePrecioConDescuento ) / 100;
  return precioConDescuento;
}

function validarCupon() {
  const inputCoupon = document.getElementById("inputCoupon").value;
  
  //valido que mi input no llegue vacio
  if(inputCoupon == "") {
    mensajeDeError.innerText = "por favor llene el campo del cupon";
  }
  
  //valido que encontro el cupon
  const encuentraCupon = coupons.find(cupon => cupon.couponName === inputCoupon);
  if (encuentraCupon) {
    return aplicarCupon(encuentraCupon);
  } else {
    return mensajeDeError.innerText = "No hemos encontrado este cupon";
  }
}

function mostrarContenedorDelCupon() {
  const input = document.getElementById("hasDiscount");
  input.checked == true ? containerInputDiscount.classList.remove("hidden") : containerInputDiscount.classList.add("hidden");
  tieneCupon = true;
}

function obtenerDescuento() {
  let precio = parseInt(document.getElementById("inputPrice").value);
  let descuentos = parseInt(document.getElementById("inputDiscount").value);

  if(precio === 0) {
    return mensajeDeError.innerText = "LLena los campos";
  } else if (!tieneCupon) {
    const total = calcularPrecioConDescuento(precio,descuentos);
    mensajeDeError.classList.add("hidden");
    return message.innerText = `tu resultado es: ${total}$`;
  } else {
    return validarCupon();
  }
}

function aplicarCupon(cuponPrice) {
  let precio = parseInt(document.getElementById("inputPrice").value);
  let descuentos = parseInt(document.getElementById("inputDiscount").value);
  const descuentoDelCupon = cuponPrice.discount;
  const total = calcularPrecioConDescuento(precio, descuentos);
  return message.innerText = `tu resultado es: ${descuentoDelCupon - total}$`;
}