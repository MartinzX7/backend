// const prompt = require("prompt-sync");

const usuario = "admin";
const senha = 1234;

if (usuario == "admin") {
    if (senha == 1234) {
        console.log("Logado");
    } else {
        console.log("Senha inválida");
    }
} else {
    console.log("Usuário inválido");
}