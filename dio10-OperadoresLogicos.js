// Operadores lógicos

// && - AND
let idade = 18
let vistoVerificado = true
resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

// || - OR
let chuvendo = true
let possuiGuardaChuva = true
let podeSair = (chuvendo === false) || (possuiGuardaChuva === true)
console.log(podeSair)

// ! - NOT

let clima = "chuva"
let ehPossivelSair = clima === "chuva"
console.log(ehPossivelSair)
console.log(!ehPossivelSair)
