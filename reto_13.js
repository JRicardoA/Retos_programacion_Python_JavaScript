//Contar cuántas veces aparece un valor en una lista
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa números separados por comas: ", (input) => {
    let lista = input.split(",");
    rl.question("Ingresa el numero a buscar: ", (input2) => {
        let numero_a_comparar = input2;
        let contador = 0;
        for (let item of lista) {
            if (item === numero_a_comparar) {
                contador += 1;
            }
        }
    console.log(`el numero ${numero_a_comparar} aparece ${contador} veces`)
    rl.close()
    });
});