class formdaDeBolo
{
  constructor(saborDaMassa, saborDoRecheio)
  {
    this.saborDaMassa = saborDaMassa
    this.saborDoRecheio = saborDoRecheio
  }

  escrever()
  {
    console.log(`Um Delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
  }

  assar()
  {
    console.log(`A massa de ${this.saborDaMassa} está em processo de assar.`)
  }
}

let boloFesta = new formdaDeBolo("Baunilha", "Chocolate")
let boloaniversario = new formdaDeBolo("Abacaxi", "Chantily")

boloFesta.escrever()
boloaniversario.escrever()
boloFesta.assar()
boloaniversario.saborDoRecheio = "Nutella"
boloaniversario.escrever()
boloaniversario.assar()