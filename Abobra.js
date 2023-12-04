/*
Façã um programa que recebe 5 numeros de 1 a 100 e diz qual o maior numero.

Dados de entrada:
5
50
10
98
23

Sáida esperada:
98
*/
const { gets, print} = require('./Hello-World')


const numerosSorteados = [];

for (let i = 0; i < 5; i++) 
{
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) 
{
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor)
    {
        maiorValor = numerosSorteado;
    }
}

print(maiorValor)