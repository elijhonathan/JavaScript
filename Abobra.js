/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua clasificação conforme a tabela abaixo:

Média = (Nota 1 + Nota 2 + Nota 3) / 3

Clasificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovação;
*/

let nota1 = 10;
let nota2 = 10;
let nota3 = 10;

let media = (nota1 + nota2 + nota3) /3

if (media < 5)
{
    console.log(`O aluno teve a média ${media.toFixed(2)} e foi reprovado.`)
}
else if(media >= 5 && media <= 7)
{
    console.log(`O aluno teve a média ${media.toFixed(2)} e irá para a recuperação.`)
}
else if(media > 7 && media <= 10)
{
    console.log(`O aluno teve a média ${media.toFixed(2)} e obteve a aprovação.`)
}
else 
{
    console.log(`Verifique as notas digitadas, algum valor invalido dectado.`)
}