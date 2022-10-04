class Equipamento {
    ligado: boolean;

    constructor(ligado: boolean = false) {
        this.ligado = ligado;
    }

    liga(): void {
        if(!this.ligado) {
            this.ligado = true;
        }
    }

    desliga(): void {
        if(this.ligado) {
            this.ligado = false;
        }
    }

    inverte(): void {
        if(!this.ligado) {
            this.ligado = true;
        }
        else {
            this.ligado = false;
        }
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let equipamento: Equipamento = new Equipamento();

console.log(`Situação: ${equipamento.estaLigado()}`);// false
equipamento.liga();
console.log(`Situação: ${equipamento.estaLigado()}`);// true
equipamento.desliga();
console.log(`Situação: ${equipamento.estaLigado()}`);// false



