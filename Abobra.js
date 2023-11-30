/*
Usando funcções faça um programa que calcule o valor do produto conforme a forma de pagamento descrita abaixo:
- À vista débito, 10% de desconto;
- À vista no dinheiro ou pix, 15% de desconto;
- Em até duas vezes no crédito, valor normal sem juros;
- Em mais de duas vezes no crédito, 10% por parcela;
*/



function debito(valorProduto)
{
    valor = valorProduto - (valorProduto * 0.10)
    return console.log(`Na forma de pagamento debito voçê ganha 10% de desconto, seu produto terá o valor de R$ ${valor.toFixed(2)}`)
}

function avista(valorProduto, metodoPagamento)
{
    valor = valorProduto - (valorProduto * 0.15)
    if(metodoPagamento === 'pix' || metodoPagamento === 'dinheiro')
    {
        return console.log(`Na forma de pagamento ${metodoPagamento} voçê ganha 15% de desconto, seu produto terá o valor de R$ ${valor.toFixed(2)}`)
    }
    else
    {
        return console.log(`Metodo de pagamento inválido, tente novamente.`)
    }
}

function credito(valorProduto, numeroParcelas)
{
    if( numeroParcelas <= 2)
    {
        return console.log(`Na forma de pagamento credito em até 2 vezes seu produto terá o valor de R$ ${valorProduto.toFixed(2)}`)
    }
    else if(numeroParcelas > 2 && numeroParcelas <= 10)
    {
        valorFinal = valorProduto +  ((valorProduto * 0.10)* numeroParcelas)
        return console.log(`Na forma de pagamento credito em mais de 2 vezes, seu produto terá um acrescimo de 10% por parcela, o valor total será R$ ${valorFinal.toFixed(2)}`) 
    }
    else
    {
        return console.log(`Numero de parcelas inválido, tente novamente.`)
    }

}

debito(100);
avista(100, 'pix');
avista(100, 'dinheiro');
avista(100, 'dolar');
credito(100, 2);
credito(100, 5);
credito(100, 20);
