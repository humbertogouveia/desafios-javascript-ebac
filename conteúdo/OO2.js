class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }

    idade() {
        let date = new Date();
        return date.getFullYear() - this.ano;
    }
}

let meuCarro = new Carro('Peugeot', 2017);

console.log(`${meuCarro.idade()}`);
