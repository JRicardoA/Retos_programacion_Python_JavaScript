//Escribe un programa que pida al usuario un número y muestre en pantalla su tabla de multiplicar del 1 al 10.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa un número: ", (input) => {
let mult = [1,2,3,4,5,6,7,8,9,10];
console.log(`Tabla del ${input}`)
for (let valor of mult){
    console.log(`${valor} * ${input} = ${input * valor}`)};
rl.close();});
//podria usar forEach o No utilizar ninguna array, for (let i = 1; i <= 10; i++) {console.log(`${numero} x ${i} = ${numero * i}`);}