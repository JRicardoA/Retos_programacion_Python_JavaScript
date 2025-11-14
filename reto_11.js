//Escribe un programa que reciba una lista de números (separados por comas) y luego: Muestre todos los números pares y Muestre todos los números impares
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa números separados por comas: ", (input) => {
 let lista = input.split(",")
 let lista_pares = lista.filter(num => num % 2 === 0)
 let lista_impares = lista.filter(num => num % 2 !== 0)

 let pares = lista_pares.join(",")
 let impares = lista_impares.join(",")

 console.log(`los numeros pares son: ${pares}`)
 console.log(`los numeros impares son: ${impares}`)
});
// chatgpt usa el commando push y un if parecido al de python