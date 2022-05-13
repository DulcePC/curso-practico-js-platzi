// Codigo del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Codigo del radio
function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI; 
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

//Access dom global variables
let totalResult = null;
const resultSquare = document.getElementById("resultSquear"); 
const resultTriangle = document.getElementById("resultTriangle");
const resultTriangle2 = document.getElementById("resultTriangle2");

//Access DOM cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputSquare").value;
  totalResult = perimetroCuadrado(input);
  resultSquare.innerHTML = `Tu resultado es: ${totalResult} cm`
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputSquare").value;
  totalResult = areaCuadrado(input);
  resultSquare.innerHTML = `Tu resultado es: ${totalResult} cm2`;
}

//Access DOM triangulo
function calcularPerimetroTriangulo() {
  const inputA = parseInt(document.getElementById("inputTriangleA").value);
  const inputB = parseInt(document.getElementById("inputTriangleB").value);
  const inputC = parseInt(document.getElementById("inputTriangleBase").value);  
  totalResult = perimetroTriangulo(inputA,inputB,inputC);
  resultTriangle.innerHTML = `Tu resultado es: ${totalResult} cm`;
}

function calcularAreaTriangulo() {
  const inputBase = parseInt(document.getElementById("inputTriangleBase").value);
  const inputHeight = parseInt(document.getElementById("inputTriangleHeight").value);
  totalResult = areaTriangulo(inputBase, inputHeight);
  resultTriangle.innerHTML = `Tu resultado es: ${totalResult} cm`;
}

function calcularTrianguloIsosceles(lado1,lado2,base) {
  // Para saber si un triangulo es tipo isosceles, 2 de sus lados miden lo mismo y el otro mide distinto
  if( lado1 === lado2 && lado1 != base) {
    console.log("triangulo");
    const altura = lado1**2 - base**2 / 4;
    return altura;
  } else {
    alert("Esto no es un triangulo isosceles")
  }
}

function getDataTrianguloIsoles() {
  const input1 = parseInt(document.getElementById("inputTriangleA2").value);
  const input2 = parseInt(document.getElementById("inputTriangleB2").value);
  const input3 = parseInt(document.getElementById("inputTriangleBase2").value);
  totalResult = calcularTrianguloIsosceles(input1,input2,input3);
  resultTriangle2.innerHTML = `Tu resultado es: ${totalResult} h`;
}

//Access DOM circle
function getDataDiamtroCircle() {
  const inputCircle = parseInt(document.getElementById("inputCircle").value);
  totalResult = diametroCirculo(inputCircle);
  resultCircle.innerHTML = `Tu resultado es: ${totalResult}`;
}

function getDataPerimetroCircle() {
  const inputCircle = parseInt(document.getElementById("inputCircle").value);
  totalResult = perimetroCirculo(inputCircle);
  resultCircle.innerHTML = `Tu resultado es: ${totalResult}`;
}

function getDataAreaCircle() {
  const inputCircle = parseInt(document.getElementById("inputCircle").value);
  totalResult = areaCirculo(inputCircle);
  resultCircle.innerHTML = `Tu resultado es: ${totalResult}`;
}