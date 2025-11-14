//Escribe un programa que reciba una lista de números (separados por comas) y luego: Muestre el numero mayor, el menor y el promedio
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa números separados por comas: ", (input) => {
    let lista = input.split(",")
    let numeros_1 = lista.map(elemento => parseInt(elemento))
    let div = numeros_1.length
    let sum = 0
    for(i=0; i<div; i++){
        sum += numeros_1[i]
    }
    max=Math.max(...numeros_1)
    min=Math.min(...numeros_1)
    prom = sum / div
    console.log(`el numero mayor de la lista es ${max}, el numero menor de la lista es ${min},  y el promedio de los numeros de la lista es ${prom}`)
});