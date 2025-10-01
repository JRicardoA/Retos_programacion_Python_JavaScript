//Escribe un programa que pida al usuario una lista de números separados por comas y muestre la suma de todos los elementos.const readline = require("readline");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa numeros separados por letras: ", (input) => {
    let numero = input.split(',')
    let numero_2 = numero.map(elemento => parseInt(elemento))
    let suma = 0
    for (i = 0; i < numero_2.length; i++){
        suma += numero_2[i]
    }
    console.log(suma)
rl.close();});