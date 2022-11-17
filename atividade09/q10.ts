export  interface Tributavel {
    calculaTributos(): number;
}

export class Conta {
    constructor(private _nome: string, private _saldo: number) {}

    public getNome() {
        return this._nome;
    }

    public setNome(nome: string) {
        this._nome = nome;
    }

    public getSaldo() {
        return this._saldo;
    }

    public setSaldo(saldo: number) {
        this._saldo = saldo;
    }
}

export class ContaCorrente extends Conta implements Tributavel {
    
    constructor(nome: string, saldo: number) {
        super(nome, saldo);
    }

    calculaTributos(): number {
        return this.getSaldo() * .1;
    }
}

export class SeguroDeVida implements Tributavel {
    calculaTributos(): number {
        return 50;
    }
}