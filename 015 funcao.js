const prompt = require("prompt-sync")();
function BemVindo() {
    console.log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
    console.log("Bem vindo á UC BackEnd");
    console.log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
}
BemVindo();


let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite outro numero: "));
function multiplicacao(n1,n2) {
    let resultado = n1 * n2;
    console.log(`O resultado da multiplicacao e ${resultado}`);
    return resultado;
    
}
multiplicacao(n1,n2);