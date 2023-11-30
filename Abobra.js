/*
Crie uma função que conforme a idade ela passa uma mensagem especifica;
*/

function vericaIdade(idade)
{
    if(idade <= 11)
    {
        console.log('Você é considerado uma criança.')
    }
    else if( idade >= 12 && idade <= 17)
    {
        console.log('Você é considerado um adolescente.')
    }
    else if(idade >= 18 && idade <= 24)
    {
        console.log('Você é considerado um jovem adulto.')
    }
    else if(idade > 24 && idade < 110)
    {
        console.log('Você é considerado um adulto.')
    }
    else
    {
        console.log('Você digitou uma idade inválida.')
    }
}

vericaIdade(9);
vericaIdade(13);
vericaIdade(19);
vericaIdade(99);
vericaIdade(250);