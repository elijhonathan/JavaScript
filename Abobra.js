/*
Faça um programa que calcule o valor do produto conforme a forma de pagamento descrita abaixo:
- À vista débito, 10% de desconto;
- À vista no dinheiro ou pix, 15% de desconto;
- Em até duas vezes no crédito, valor normal sem juros;
- Em mais de duas vezes no crédito, 10% por parcela;
*/

let valorProduto = 115.97;
let formaDePagamento = 'credito'
let numeroparcelas = '4';

if (formaDePagamento === 'debito')
{
    console.log(`Na forma de pagamento debito voçê ganha 10% de desconto, seu produto terá o valor de R$ ${valorProduto -  (valorProduto * 0.10).toFixed(2)}`)
}
else if (formaDePagamento === 'dinheiro' || formaDePagamento === 'pix')
{
    console.log(`Na forma de pagamento dinheiro ou pix voçê ganha 15% de desconto, seu produto terá o valor de R$ ${valorProduto -  (valorProduto * 0.15).toFixed(2)}`)
}
else if(formaDePagamento === 'credito' && numeroparcelas <= 2 )
{
    console.log(`Na forma de pagamento credito em até 2 vezes seu produto terá o valor de R$ ${valorProduto}`)
}
else if(formaDePagamento === 'credito' && numeroparcelas > 2)
{
    let valorFinal = valorProduto +  ((valorProduto * 0.10)* numeroparcelas)
    console.log(`Na forma de pagamento credito em mais de 2 vezes, seu produto terá um acrescimo de 10% por parcela, o valor total será R$ ${valorFinal.toFixed(2)}`) 
}