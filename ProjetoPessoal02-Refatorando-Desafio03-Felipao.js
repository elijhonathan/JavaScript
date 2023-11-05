class personagem {
  constructor(nome, Xp, classe) {
    this.nome = nome
    this.Xp = Xp
    this.classe = classe
    this.ataque = ""
  }

  movimentoAtaque() {
    const ataques = {
      Guerreiro: "Ataque com a espada",
      Mago: "Ataque com magia",
      Lutador: "Ataque com Golpe de artes marciais",
      Ninja: "Ataque com katana",
      Generico: "Ataque Generico (Classe não encontrada...)"
    }

    this.ataque = ataques[this.classe] || ataques.Generico
  }

  atacar() {
    this.movimentoAtaque()
    console.log(`${this.nome} da classe ${this.classe} usou ${this.ataque}`)
  }

  reletar() {
    console.log(`O personagem ${this.nome} da classe ${this.classe} está com ${this.Xp} de XP`)
  }
}

let conan = new personagem("Conan", 50, "Guerreiro")
let jiraya = new personagem("Jiraya", 30, "Ninja")
let bruceLee = new personagem("BruceLee", 99, "Lutador")
let gandalf = new personagem("Gandalf", 100, "Mago")
let eli = new personagem("Eli", 1, "Programador")

conan.reletar()
conan.atacar()

jiraya.reletar()
jiraya.atacar()

bruceLee.reletar()
bruceLee.atacar()

gandalf.reletar()
gandalf.atacar()

eli.reletar()
eli.atacar()
