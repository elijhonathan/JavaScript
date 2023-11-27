/*
Faça um programa para calcular o valor de uma viagem

Você terá 3 variaveis. Sendo elas:
1 - Preço combustivel;
2 - Gasto médio de combustivel do carro por km;
3 - Distancia em km da viagem

Imprima no console o valor que será gasto de combustivel para realizar a viagem.
*/

var precoCombustivel = 6.00;
var gastoMedioLitroPorKm = 15;
var distanciaViagem = 300;

var valorTotalCombustivel = (distanciaViagem / gastoMedioLitroPorKm) * precoCombustivel

console.log(`O valor total gasto para fazer está viagem será R$ ${valorTotalCombustivel}`)
