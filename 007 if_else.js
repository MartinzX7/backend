prompt = require("prompt-sync")();
//if e else


const idade = 16;
if (idade >= 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}

//exercicio
const idade1 = 16
if (idade1 >= 18) {
    console.log("maior de idade");
} else if (idade1 >12 && idade1 < 18) {
    console.log("adolescente");
} else if (idade1 >1 && idade1 < 12) {
    console.log("crianca");
} else if (idade1 < 1) {
    console.log("bebe");
}

    
