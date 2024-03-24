const calculaMdc = require('../src/exercicio-1-calculandoMDC')

test('Calcula MDC Corretamente',()=>{
    
    let numero1 = 20
    let numero2 = 10
    let resultadoMdc = calculaMdc(numero1, numero2)

    expect(resultadoMdc).toBe(10)

})