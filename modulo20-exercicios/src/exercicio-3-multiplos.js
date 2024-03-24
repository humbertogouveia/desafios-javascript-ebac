function somaValoresMultiplos(numeroMaximo, divisor1, divisor2) {
    let soma = 0;
    for (let i = 1; i < numeroMaximo; i++) {
        if (i % divisor1 === 0 || i % divisor2 === 0) {
            soma += i;
        }
    }
    return soma;
}

const resultadoFinal = somaValoresMultiplos(1000, 5, 7);

console.log(`A soma dos números múltiplos de 5 ou 7 abaixo de 1000 é ${resultadoFinal}`);

module.exports = somaValoresMultiplos