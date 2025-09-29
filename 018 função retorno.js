function comissao (valor, percentual) {
    let Valcomissao = valor * (percentual / 100);
    return Valcomissao;
}

let comissaoRet = comissao(8750, 2.5);
console.log(comissaoRet);

let salario = 8750;
salrio = salario + comissaoRet;
console.log(salario);

