/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos atributos nome, peso, altura.
Crie um metodo para calcular o imc:
imc = peso / (altura * altura);
*/

class Pessoa
{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura)
    {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    imc()
    {
        
        let oImc =  this.peso / (this.altura * this.altura);
        return oImc.toFixed(2);

    }

    classificarImc()
    {
        let classificacao = this.imc()
        if(classificacao < 18.5)
        {
            console.log(`${this.nome} seu imc é ${imc} você é considerado abaixo do peso.`)
        }
        else if(classificacao >= 18.5 && classificacao <= 25)
        {
            console.log(`${this.nome} seu imc é ${classificacao} você é considerado com peso normal.`)
        }
        else if(classificacao >= 25 && classificacao <= 30)
        {
            console.log(`${this.nome} seu imc é ${classificacao} você é considerado acima do peso.`)
        }
        else if(classificacao >= 30 && classificacao <= 40)
        {
            console.log(`${this.nome} seu imc é ${classificacao} você é considerado obeso.`)
        }
        else
        {
            console.log(`${this.nome} seu imc é ${classificacao} você é considerado com obesidade grave.`)
        }
            }
}

const eli = new Pessoa('Eli', 74, 1.70)
const jheniffer = new Pessoa('Jhennifer', 63, 1.69)

console.log(eli.imc());
console.log(jheniffer.imc());

eli.classificarImc();
jheniffer.classificarImc();
