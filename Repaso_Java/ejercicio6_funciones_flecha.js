// Ejercicio 6: Funciones de flecha
// Objetivo: crear cuatro funciones de flecha para sumar, restar, multiplicar y dividir dos números.

// Cada función recibe (a, b) y devuelve el resultado automáticamente (sin "return")
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

// En la división se valida que el divisor no sea cero
const dividir = (a, b) => {
  if (b === 0) {
    return "Error: no se puede dividir entre cero";
  }
  return a / b;
};

// Pruebas con los números 20 y 4
const numeroA = 20;
const numeroB = 4;

console.log("Suma: " + sumar(numeroA, numeroB));
console.log("Resta: " + restar(numeroA, numeroB));
console.log("Multiplicación: " + multiplicar(numeroA, numeroB));
console.log("División: " + dividir(numeroA, numeroB));
console.log("División entre cero: " + dividir(numeroA, 0));
