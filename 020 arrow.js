function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao("Martinz");

//funcao anonima
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}`);
};
saudacaoAnonima("Martinz");

//arrow function
const saudacaoArrow = (nome) => {
    console.log(`Tenha um bom dia ${nome}`);
};
saudacaoArrow("Martinz");

const soma = (num1, num2) => {
    console.log(num1 + num2);
};
soma(15, 62);

