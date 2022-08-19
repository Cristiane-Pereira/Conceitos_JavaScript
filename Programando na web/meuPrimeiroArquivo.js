console.log("Estudo JavaScript...");

console.log("---Trabalhando com variáveis---");
const ano_atual = 2022;
const ano_de_nascimento = 1990;
const idade = ano_atual - ano_de_nascimento;
console.log(`Minha idade é: ${idade} anos.`);
console.log("-------------------------------");
console.log('\n');

console.log("---Trabalhando com Operações---");
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));
console.log("7" / "2");
console.log("-------------------------------");
console.log("\n");

console.log("---Trabalhando com Matrizes---");
const listaDestinos = new Array(
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Amazonas"
);
listaDestinos.push("Manaus");
console.log(listaDestinos);
listaDestinos.splice(2, 1); //1: posição do array a ser deletada, 2: quantas elemaentos vai ser deletado;
console.log(listaDestinos);
console.log("\n");

const frutas = ["Maça", "Banana", "Pera", "Pessêgo", "Abacaxi", "Cereja"];
console.log(frutas);
console.log(frutas[0]);
console.log("------------------------------");
console.log("\n");

console.log("---Trabalhando com loops---");
console.log("Tabuada do 2");
for(i = 0; i <= 10; i++) {
 const tabuada = 2;
 const resultado = tabuada * i;
 console.log(`${tabuada} * ${i} = ${resultado}`);
}
console.log("\n");

console.log("Tabuada do 5");
let contador = 0;
let multiplicador = 5;

while (contador <= 10) {
    let result = multiplicador * contador;
    console.log(`${multiplicador} * ${contador} = ${result}`);
    contador += 1;
}


