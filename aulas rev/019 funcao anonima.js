//funcao nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao("Martinz");

//funcao anonima
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}`);
};
saudacaoAnonima("Martinz");


function soma (num1, num2) {
    console.log(num1 + num2);
}
soma(8, 9);

const somaAnonima = function (num1, num2) {
    console.log(num1 + num2);
}
somaAnonima(4, 6);