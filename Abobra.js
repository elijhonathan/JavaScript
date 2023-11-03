let nivelFome = 0
let janta = ""

if(nivelFome === 1)
{
    janta = "Salada"
}

else if(nivelFome === 2)
{
    janta = "Macaronada"
}

else if(nivelFome === 3)
{
    janta = "Lasanha"
}

else
{
    janta = "nada, ficaremos de jejum"
}

console.log("O que comeremos hoje: " + janta)