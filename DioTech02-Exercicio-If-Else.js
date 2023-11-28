/*
Faça um programa para calcular o valor de uma viagem

Você terá 5 variaveis. Sendo elas:
1 - preço etanol;
2 - preço gasolina;
3 - o tipo de combustivel que está no seu carro;
4 - gasto médio de combustivel do carro por km;
5 - distancia em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanol = 3.15;
let precoGasolina = 5.99;

let tipoDeCombustivel = 'gasolina';

let gastoMedio = 10;

let distanciaViagem = 300;

if (tipoDeCombustivel === 'gasolina')
{
    resultado = (distanciaViagem / gastoMedio) * precoGasolina
    console.log(`O Gasto para realizar está viagem será R$ ${resultado.toFixed(2)}`);
}
else if (tipoDeCombustivel === 'etanol')
{
    resultado = (distanciaViagem / gastoMedio) * precoEtanol
    console.log(`O Gasto para realizar está viagem será R$ ${resultado.toFixed(2)}`);
}
else
{
    console.log('O combustivel informado não é valido.')
}
