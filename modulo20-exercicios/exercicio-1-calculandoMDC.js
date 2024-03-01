function calculaMdc(primeiroNumero, segundoNumero) {

    while(segundoNumero !== 0) {
        let restoDivisao = primeiroNumero % segundoNumero

        primeiroNumero = segundoNumero
        segundoNumero = restoDivisao
    }

    return primeiroNumero
}

let numero1 = 20
let numero2 = 10
let resultadoMdc = calculaMdc(numero1, numero2)

console.log(`O MDC de ${numero1} e ${numero2} é ${resultadoMdc}`)
