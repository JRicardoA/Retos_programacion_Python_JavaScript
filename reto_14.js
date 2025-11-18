//comparar un numero: GENERAR UNA LISTA DE LOS NUMEROS MAYORES QUE EL Y UNA LISTA DE LOS NUMEROS MENORES QUE EL
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});
rl.question("Ingresa números separados por comas: ", (input) => {
    let lista = input.split(",");
    rl.question("Ingresa el numero a buscar: ", (input2) => {
        let numero_a_comparar = input2;
        let lista_int = lista.map(item => parseInt(item));
        let lista_mayores = [];
        let lista_menores = [];
        for (let item of lista_int){
            if(item > numero_a_comparar){
                lista_mayores.push(item);
            }else{
                lista_menores.push(item);
            }
        };
        let mayores = lista_mayores.join(", ");
        let menores = lista_menores.join(", ");
        console.log(`Los numeros mayores que ${numero_a_comparar} son ${mayores}.\nLos numeros menores o iguales que ${numero_a_comparar} son ${menores}.`)
    rl.close()
    });
});