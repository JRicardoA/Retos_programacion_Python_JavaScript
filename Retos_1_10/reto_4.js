//Escribe un programa que pida al usuario un número y muestre en pantalla si el número es par o impar
// para poder practicar en node.js usando la terminal
// Importamos el módulo readline para leer datos del usuario desde la terminal
const readline = require("readline");

// Creamos una interfaz para manejar la entrada y salida estándar (teclado y pantalla)
const rl = readline.createInterface({
  input: process.stdin,  // entrada desde teclado
  output: process.stdout // salida en la consola
});

// realizamos el ejercicio
rl.question("Ingresa un número: ", (input) => {

let x = parseInt(input);
if (x % 2 == 0) {
    console.log("es par");
} else{
    console.log("es impar");
}
//cerramos
rl.close();});
