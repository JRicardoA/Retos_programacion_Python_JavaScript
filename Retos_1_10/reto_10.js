//Pide al usuario que ingrese una lista de números (separados por comas) y luego otro número.
//El programa debe decir cuántos números de la lista son mayores que el número dado.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa números separados por comas: ", (entrada) => {
  const numeros = entrada.split(",").map(s => parseFloat(s.trim())).filter(n => !Number.isNaN(n));

  rl.question("Ingresa el número con el que deseas compararlo: ", (ref) => {
    const numero_comparacion = parseFloat(ref.trim());
    if (Number.isNaN(numero_comparacion)) {
      console.log("El valor de comparación no es un número válido.");
      rl.close();
      return;
    }

    const mayores = numeros.filter(n => n > numero_comparacion).length;
    console.log(`Hay ${mayores} números mayores que ${numero_comparacion}`);
    rl.close();
  });
});
// es la respuesta que me dio el chatGPT, yo intente usar un bucle, cunado js da la facilidad de .filter