const somaValoresMultiplos = require('../src/exercicio-3-multiplos')

test('A soma dos números múltiplos de 5 ou 7 abaixo de 1000',()=>{
    const resultadoFinal = somaValoresMultiplos(1000, 5, 7);
    expect(resultadoFinal).toBe(156361)
})