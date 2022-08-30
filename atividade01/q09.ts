class SituacaoFinanceira {
    valorCredito: number;
    valorDebito: number;

    constructor(cred: number, deb: number) {
        this.valorCredito = cred;
        this.valorDebito = deb;
    }

    saldo(): number{
        return this.valorCredito - this.valorDebito;
    }
}

let situacao = new SituacaoFinanceira(1700, 980);

console.log("Saldo: ", situacao.saldo());