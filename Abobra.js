let userName = getfirstName("Eli Jhonathan")
let userNameTwo = getfirstName("Joséfino da Silva Pereira de Andrade Coltelho")


function getfirstName(name)
{
    let firstName = name.split(" ")[0]
    return firstName
}

console.log(`Olá ${userName} seja bem vindo!`)
console.log(`Olá novo usuario chamado ${userNameTwo} seja bem vindo!!!`)