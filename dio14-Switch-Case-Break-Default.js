let fruta = ""

switch (fruta)
{
    case "laranja":
    case "morango":
    case "uva":
        console.log("suco de " + fruta)
        break

    case "banana":
    case "maça":
        console.log("vitamina de " + fruta)
        break

    case "abacaxi":
    case "kiwi":
        console.log("caipirinha de " + fruta)
        break

    case "limão":
        console.log("Limonada suiça")
        break

    default:
        console.log("Tomar água")
}
