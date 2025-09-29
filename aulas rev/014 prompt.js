const prompt = require("prompt-sync")();

let nome = prompt("Qual o seu nome?");
console.log(`Ola ${nome}`);

let idade = prompt("Qual o ano que voce nasceu?");
idade = 2025 - idade;
console.log(`Voce tem ${idade} anos`);

let fezAniversario = prompt("Voce fez aniversario esse ano?");
if (fezAniversario != "sim") {
    idade = idade + 1;
    console.log(`Voce tem ${idade} anos`);
    
}