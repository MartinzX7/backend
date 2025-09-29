//valor pi function anonima
const PI = function () {
    return 3.14;
}

console.log(PI());

//valor pi function arrow
const PII = () => {
    return 3.14;
}

console.log(PII());

//circuferencia
const raioCircunferencia = (raio) => {
    return raio / (2 * PI());
}

console.log(raioCircunferencia(10));

