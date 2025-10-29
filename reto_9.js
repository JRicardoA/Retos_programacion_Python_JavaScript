//Escribe un programa que reciba una lista de números (ingresados por el usuario y separados por comas), y calcule la suma de todos los números pares de esa lista.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa numeros separados por comas: ", (input) => {
    let numeros = input.split(",")
    let numeros_enteros = numeros.map(elemento => parseInt(elemento))
    let suma_pares = numeros_enteros
        .filter(num => num % 2 === 0)
        .reduce((acc, num) => acc + num, 0);
    console.log(suma_pares)
rl.close();});