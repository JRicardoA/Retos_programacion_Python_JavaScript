//Escribe un programa que pida al usuario una cadena de texto y cuente cuántas vocales (a, e, i, o, u) contiene.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa una cadena de texto: ", (input) => {
let palabra = input;
let letras = palabra.split('');
let vocales = 0;
for (let letra of letras){
  if(letra == "a"){
    vocales++
  }else if (letra =="e"){
    vocales++
  }else if (letra =="i"){
    vocales++
  }else if (letra =="o"){
    vocales++
  }else if (letra =="u"){
    vocales++
  } 
};
console.log(`La cadena de texto tiene ${vocales} vocales`)
rl.close();});