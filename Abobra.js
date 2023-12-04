/*
Crie um programa que seja capaz de percorrer uma lista de números e imprima
cada numero par encontrado:
*/

let numeros = [1, 3, 9, 15, 16, 17, 6, 8, 22, 120, 2, 120, 113, 22, 54, 98];

for (let i = 0; i < numeros.length; i++) 
{
    const numero = numeros[i];
    if (numero % 2 === 0)
    {
        console.log(numero)
    }
}
