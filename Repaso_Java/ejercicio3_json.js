// Ejercicio 3: JSON
// Objetivo: crear un objeto con los datos de un vehículo, convertirlo a JSON
// y recuperar la información con JSON.parse().

// 1. Objeto JavaScript con los datos del vehículo
const vehiculo = {
  marca: "Mazda",
  modelo: "CX-30",
  color: "Rojo",
  placa: "ABC123",
  anio: 2024,
  disponible: true
};

// 2. Convertir el objeto a una cadena de texto en formato JSON
const vehiculoJSON = JSON.stringify(vehiculo);
console.log("Vehículo en JSON:");
console.log(vehiculoJSON);

// 3. Convertir la cadena JSON de nuevo a un objeto JavaScript
const vehiculoRecuperado = JSON.parse(vehiculoJSON);

// 4. Acceder a las propiedades del objeto recuperado
console.log("Información recuperada:");
console.log("Marca: " + vehiculoRecuperado.marca);
console.log("Modelo: " + vehiculoRecuperado.modelo);
console.log("Color: " + vehiculoRecuperado.color);
console.log("Placa: " + vehiculoRecuperado.placa);
console.log("Año: " + vehiculoRecuperado.anio);
console.log("Disponible: " + vehiculoRecuperado.disponible);
