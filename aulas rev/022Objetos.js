const { log } = require("console")

let produto = {
    nome : 'celular',
    preco : 2000,
    marca : 'apple',
    quebrado : false
}

console.log(produto);
console.log(produto.nome);
console.log(produto.marca);
console.log(produto.preco);
console.log(produto.quebrado);

console.log(produto['nome']);

produto.preco = 1900;
console.log(produto);
produto.modelo = 'Samsung';

for (let chave in produto) {
    console.log(`Chave: ${chave} seu valor é ${produto[chave]}`);
}

let aluno = {
    nome : 'martinz',
    idade : 18,
    sexo : 'm',
    dados_mae : {
        nome : 'gil',
        telefone : '1899200994343'
    },
    boletim: [
        {materia: "Portugues", nota: 10, faltas: 6},
        {materia: "Matematica", nota: 9, faltas: 3},
    ]
}

console.log(aluno);
console.log(aluno.dados_mae.telefone);
console.log(aluno.boletim);
