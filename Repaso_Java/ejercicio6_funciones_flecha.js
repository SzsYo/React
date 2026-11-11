
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
  if (b === 0) {
    return "Error: no se puede dividir por cero";
  }
  return a / b;
};

const numeroA = 20;
const numeroB = 4;

console.log("Suma: " + sumar(numeroA, numeroB));
console.log("Resta: " + restar(numeroA, numeroB));
console.log("Multiplicación: " + multiplicar(numeroA, numeroB));
console.log("División: " + dividir(numeroA, numeroB));
console.log("División entre cero: " + dividir(numeroA, 0));
