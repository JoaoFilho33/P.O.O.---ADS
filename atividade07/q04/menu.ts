var input = require('prompt-sync')();

import { Banco4, Conta4, Imposto, Poupanca } from "./banco";

let banco: Banco4 = new Banco4()
let opcao: string = ''

let continuar: string = ''

export function showMenu(): void {
do {
    console.log('Bem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações 8 - Render Juros\n' +
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
        case '8': 
            renderJuros();
            break
    }

    continuar = input("\nPress <ENTER> to continue")
    console.clear()
} while (opcao != '0')
}

export function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let opcao: string = input('\nCriar conta do Tipo 1 - Corrente, 2 - Poupança, 3 - Imposto: ');
    
    if(opcao == "1") {
        contaCorrente(numero, 0);
    }
    else if(opcao == "2") {
        contaPoupanca(numero, 0);
    }
    else if(opcao == "3") {
        contaImposto(numero, 0);
    }
    else {
        console.log("ERRO")
    }
}

function contaCorrente(numero: string, saldo: number) {
    let conta: Conta4;
    conta = new Conta4(numero, saldo);
    banco.inserir(conta)
}

function contaPoupanca(numero: string, saldo: number) {
    let taxaJuros: number = Number(input('\nTaxa de juros: '));
    let poupanca: Poupanca = new Poupanca(numero, saldo, taxaJuros);
    banco.inserir(poupanca);
}

function contaImposto(numero: string, saldo: number) {
    let taxaDesconto:  number = Number(input('\nTaxa de desconto: '))
    let imposto: Imposto = new Imposto(numero, saldo, taxaDesconto);
    banco.inserir(imposto);
}

export function consultar(): void {
    console.log("\nConsultar Conta\n")
    let numero: string = input('Digite o numero da conta: ')
    console.log(banco.consultarSaldo(numero))
}

export function sacar(): void {
    console.log("\nSacar\n")
    let numero: string = input('Digite o numero da conta: ')
    let valor: number = Number(input('Valor que deseja sacar: '))
    banco.sacar(numero, valor)
}

export function depositar(): void {
    console.log("\nDepositar\n")
    let numero: string = input('Digite o numero da conta: ')
    let valor: number = Number(input('Valor deposito: '))
    banco.depositar(numero, valor)
}

export function excluir(): void {
    console.log("\nExcluir\n")
    let numero: string = input('Digite o numero da conta: ')
    banco.excluir(numero)
}

export function transferir(): void {
    console.log("\nTransferir\n")
    let numero: string = input('Numero da conta para tranferência: ')
    let numero2: string = input(`Numero da conta destino: `)
    let valor: number = Number(input('Valor a ser transferido: '))
    banco.transferir(numero2, numero, valor)
}

export function totalizacoes(): void {
    console.log("\nTotalizações\n")
    console.log(banco.depositoTotal())
}

export function renderJuros(): void {
    console.log("\nRender Juros\n")
    let numero: string = input('Número da conta para aplicação de juros: ');

    banco.renderJuros(numero);
}