var input = require('prompt-sync')();

class Conta4 {
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

    consultarSaldo() {
        return this.saldo;
    }

    transferir(contaDestino: Conta4, valor: number) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor)
            return true;
        }
        else {
            return false;
        }
    }
}

class Banco3 {
    contas: Conta4[] = [];

    constructor(contas: Conta4[] = []) {
        this.contas = contas;
    }

    inserir(conta: Conta4): void {
        if (this.consultarIndice(conta.numero) == -1) {
            this.contas.push(conta);
        }
    }

    consultarSaldo(numero: string): Conta4 {
        let contaProcurada!: Conta4

        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c
                break
            }
        }

        return contaProcurada
    }

    consultarIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    sacar(numero: string, valor: number) {
        let conta: Conta4 = this.consultarSaldo(numero);

        if (conta != null) {
            conta.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let conta: Conta4 = this.consultarSaldo(numero)

        if (conta != null) {
            conta.depositar(valor)
        }
    }

    transferir(numCredito: string, numDebito: string, valor: number): void {
        let conta1: Conta4 = this.consultarSaldo(numCredito)
        let conta2: Conta4 = this.consultarSaldo(numDebito)

        if (conta1 != null && conta2 != null) {
            conta2.transferir(conta1, valor)
        }
    }

    quantidadeContas(): number {
        return this.contas.length;
    }

    depositoTotal(): number {
        let soma = 0

        for (let i = 0; i < this.contas.length; i++) {
            soma += this.contas[i].saldo
        }

        return soma
    }

    mediaTotal(): number {
        let media: number = this.depositoTotal() / this.quantidadeContas();

        return media;
    }

    excluir(numero: string): void {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                this.contas.splice(i, 1)
                break
            }
        }
    }
}

let banco: Banco3 = new Banco3()
let opcao: string = ''
let continuar: string

do {
    console.log('Bem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção: ");

    switch (opcao) {
        case '1':
            inserir()
            break

        case '2':
            consultar()
            break

        case '3':
            sacar()
            break
        case '4':
            depositar()
            break
        case '5':
            excluir()
            break
        case '6':
            transferir()
            break
        case '7':
            totalizacoes()
            break
    }

    continuar = input("\nPress <ENTER> to continue")
    console.clear()
} while (opcao != '0')

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let conta: Conta4;
    conta = new Conta4(numero, 0);
    banco.inserir(conta);
}

function consultar(): void {
    console.log("\nConsultar Conta\n")
    let numero: string = input('Digite o numero da conta: ')
    console.log(banco.consultarSaldo(numero))
}

function sacar(): void {
    console.log("\nSacar\n")
    let numero: string = input('Digite o numero da conta: ')
    let valor: number = Number(input('Valor que deseja sacar: '))
    banco.sacar(numero, valor)
}

function depositar(): void {
    console.log("\nDepositar\n")
    let numero: string = input('Digite o numero da conta: ')
    let valor: number = Number(input('Valor deposito: '))
    banco.depositar(numero, valor)
}

function excluir(): void {
    console.log("\nExcluir\n")
    let numero: string = input('Digite o numero da conta: ')
    banco.excluir(numero)
}

function transferir(): void {
    console.log("\nTransferir\n")
    let numero: string = input('Numero da conta para tranferência: ')
    let numero2: string = input(`Numero da conta destino: `)
    let valor: number = Number(input('Valor a ser transferido: '))
    banco.transferir(numero2, numero, valor)
}

function totalizacoes(): void {
    console.log("\nTotalizações\n")
    console.log(banco.depositoTotal())
}