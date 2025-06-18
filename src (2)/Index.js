// Variáveis do herói
let nome = "Anubis";
let idade = 2000;
let tipo = "mago";

// Classe do herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    // Primeira letra maiúscula no tipo
    let tipoFormatado = this.tipo.charAt(0).toUpperCase() + this.tipo.slice(1);

    // Mensagem final
    console.log(`O ${tipoFormatado} ${this.nome} de ${this.idade} anos de idade, atacou utilizando ${ataque}.`);
  }
}

// Cria o herói com as variáveis definidas
let meuHeroi = new Heroi(nome, idade, tipo);

// Executa o ataque
meuHeroi.atacar();
