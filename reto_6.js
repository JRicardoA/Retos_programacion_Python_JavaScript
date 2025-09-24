//Escribe un programa que pida al usuario una serie de números (separados por comas) y luego muestre:
//El número mayor.
//El número menor.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa 5 números separados por comas: ", (input) => {
let array1 = input.split(',').map(Number);// el map se utiliza para reemplazar los elemntos con otro tipo de lemnteos, entest caso los convertimos en numeros ya uqe eran strings
console.log(`El numero menor es ${Math.min(...array1)} y el numero mayor es ${Math.max(...array1)}`)
//en Math.min(...array1) los 3 puntos separan el array, ya que la expresion espera numeros sueltos
rl.close();});