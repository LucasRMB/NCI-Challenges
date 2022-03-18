/*
function somar(numero1, numero2) {
    return numero1 + numero2;
}

console.log('Eu quero somar 10 + 10, o resultado será: ', somar(10, 10));
console.log('Eu quero somar 10 + 10, o resultado será: ', somar('10', '10'));
*/

function converterKmEmMilhas(valorEmKm) {
    const equivalenciaEmMilhas = 0.62137;
    return valorEmKm * equivalenciaEmMilhas;
}

console.log(converterKmEmMilhas(250));
console.log(converterKmEmMilhas(350));
console.log(converterKmEmMilhas(450));
console.log(converterKmEmMilhas(550));
console.log(converterKmEmMilhas(1250));
console.log(converterKmEmMilhas(3350));
