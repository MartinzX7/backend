//escopo de variavel

let variavelGlobal = "sou global";

function minhaFuncao() {
    let variavelLocal = "sou local";
    console.log(variavelGlobal);
    console.log(variavelLocal);
}
minhaFuncao();
console.log(variavelGlobal);
console.log(variavelLocal);

