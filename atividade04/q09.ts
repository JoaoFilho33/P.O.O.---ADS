class Jogador {
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca: number, nivel: number, pontos: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(outroJogador: Jogador): void {
        if(outroJogador.estaVivo()){
            outroJogador.pontos -= this.calcularAtaque()
        }
        else{
            console.log("Jogador derrotado!")
        }
    }

    estaVivo(): boolean {
        if(this.pontos > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    toString(): string {
        return `Força: ${this.forca} - Nível: ${this.nivel} - Pontos Atuais: ${this.pontos}`
    }
}

let jogador1: Jogador = new Jogador(115, 75, 1200);
let jogador2: Jogador = new Jogador(102, 69, 1000);

console.log(`Ataque Jogador 1: ${jogador1.calcularAtaque()}`);
console.log(`Ataque Jogador 2: ${jogador2.calcularAtaque()}`);

console.log(`Status Jogador 1: ${jogador1.toString()}`);
console.log(`Status Jogador 2: ${jogador2.toString()}`);

jogador1.atacar(jogador2);
jogador2.atacar(jogador1);

console.log(`Status Jogador 1: ${jogador1.toString()}`);
console.log(`Status Jogador 2: ${jogador2.toString()}`);// o jogador 1 tem mais pontos