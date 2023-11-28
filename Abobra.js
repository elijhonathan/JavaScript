/*
Calcule o IMC e exiba a mensagem conforme o resultado.

IMC = Peso / (Altura * Altura)

IMC condições:
- Abaixo de 18.5, Abaixo do peso;
- Entre 18.5 e 25, Peso normal;
- Entre 25 e 30, Acima do peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obessidade grave;
*/

let peso = 120;
let altura = 1.70;

let imc = peso / (altura * altura);

if(imc < 18.5)
{
    console.log(`O seu imc é ${imc.toFixed(2)} você é considerado abaixo do peso.`)
}
else if(imc >= 18.5 && imc <= 25)
{
    console.log(`O seu imc é ${imc.toFixed(2)} você é considerado com peso normal.`)
}
else if(imc >= 25 && imc <= 30)
{
    console.log(`O seu imc é ${imc.toFixed(2)} você é considerado acima do peso.`)
}
else if(imc >= 30 && imc <= 40)
{
    console.log(`O seu imc é ${imc.toFixed(2)} você é considerado obeso.`)
}
else
{
    console.log(`O seu imc é ${imc.toFixed(2)} você é considerado com obesidade grave.`)
}