
torrar("pão de forma", "Raissa", 10.58)
torrar("Pão integral", "Raquel", 5.96)
torrar("Pão francês", "Roseli")
torrar("Pão de mirtilo",)
torrar()
torrar(undefined, "Raimunda", 35.95)

function torrar(pao = "Pão de trigo", nome = "Cliente", valor = 0)
{
    console.log("Torrada feita com " + pao + ", e vai ser comido por " + nome + ", e o valor será R$ " + valor)
}