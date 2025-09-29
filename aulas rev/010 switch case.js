let diaSemana = 'sexta';

switch (diaSemana) {
    case 'segunda':
        console.log('Hoje tem SENAI');
        break;
    case 'terca':
        console.log('Hoje tem SENAI');
        break;
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log('Hoje tem aula no SESI');
        break;
    default:
        console.log('Hoje nao tem aula');
        break;
}