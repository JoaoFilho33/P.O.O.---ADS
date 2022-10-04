class Conta1 {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferencia(contaDestino: Conta1, valor: number) {
        if (!this.sacar(valor)) {
            return false;
        }
        else {
        contaDestino.depositar(valor);
        return true;
        }
    }
}

let c1: Conta1 = new Conta1("1", 100);
let c2: Conta1 = new Conta1("2", 100);

console.log(`c1 saque 150: ${c1.sacar(150)}`);
console.log(`c1 saque 20: ${c1.sacar(20)}`);

console.log(`Transferir 100 c1/c2: ${c1.transferencia(c2, 100)}`);
console.log(`Transferir 20 c1/c2: ${c1.transferencia(c2, 20)}`);