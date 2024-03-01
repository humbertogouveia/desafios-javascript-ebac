const carro = {}
carro.nome = 'Fiat'
carro.ano = 2019
carro.idade = function() {
    let date = new Date()
    return date.getFullYear() - carro.ano
}

console.log(`${carro.idade()} anos`)