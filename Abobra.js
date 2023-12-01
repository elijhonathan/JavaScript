/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos de o valor
gasto em reais para realizar este percurso.
*/

class Carros
{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) 
    {
        this.marca = marca
        this.cor = cor
        this.gastoMedio = gastoMedio
    }

    gastoReais(quantidadeKm, precoCombustivel)
    {
        let valorfinal = precoCombustivel * (quantidadeKm / this.gastoMedio)
        return console.log(`O carro da marca ${this.marca} da cor ${this.cor} para realizar a viagem gastará R$ ${valorfinal.toFixed(2)}`)
    }
}

const bmw320i = new Carros('BMW - 320I', 'Azul Metálico', 10)
const porchecarreragt = new Carros('Porche - Carrera GT', 'Branca', 9)
const bmwi4 = new Carros('BMW - I4', 'Verde Metálico', 5)


bmw320i.gastoReais(300, 5)
porchecarreragt.gastoReais(99, 9)
bmwi4.gastoReais(500, 5)


