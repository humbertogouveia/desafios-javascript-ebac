
test('Deve validar o maior número da lista e o indice de seu maior número',()=>{
    
let listaDeNumeros = [343,2342,757,342,8642]

let maiorNumeroDaLista = Math.max(...listaDeNumeros)
let indiceDoMaiorNumero = listaDeNumeros.indexOf(maiorNumeroDaLista)

expect(maiorNumeroDaLista).toBe(8642)
expect(indiceDoMaiorNumero).toBe(4)

})
