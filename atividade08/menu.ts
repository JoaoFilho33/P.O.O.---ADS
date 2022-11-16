var input = require('prompt-sync')();
import * as fs from "fs"
import { Banco4, Conta4, Imposto, Poupanca } from "././banco/banco";
import { InputError } from "./excessoes";
import { ehValido } from "./funcoes";
let banco: Banco4 = new Banco4()
let opcao: string = ''

let continuar: string = ''

lerArquivoExterno();

do {
    try{
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
    ehValido(opcao);
    continuar = input("\nPress <ENTER> to continue")
    console.clear()
    } catch(error: any) {
        console.log((<Error>error).message);
    }
} while (opcao != '0');

export function inserir(): void {
    console.log("\nCadastrar conta\n");
    try{
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
    } catch(error: any) {
        console.log((<Error>error).message);
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
    try{
        let numero: string = input('Digite o numero da conta: ')
        console.log(banco.consultar(numero))
    } catch(error: any) {
        console.log((<Error>error).message);
    }
}

export function sacar(): void {
    console.log("\nSacar\n")
    try{
        let numero: string = input('Digite o numero da conta: ')
        let valor: number = Number(input('Valor que deseja sacar: '))
        banco.sacar(numero, valor)
    }catch (error: any) {
        console.log((<Error>error).message);
    }
}

export function depositar(): void {
    console.log("\nDepositar\n")
    try{
        let numero: string = input('Digite o numero da conta: ')
        let valor: number = Number(input('Valor deposito: '))
        banco.depositar(numero, valor)
    } catch (error: any) {
        console.log((<Error>error).message)
    }
}

export function excluir(): void {
    console.log("\nExcluir\n")
    try{
        let numero: string = input('Digite o numero da conta: ')
        banco.excluir(numero)
    } catch (error: any) {
        console.log((<Error>error).message)
    }
}

export function transferir(): void {
    console.log("\nTransferir\n")
    try{
        let numero: string = input('Numero da conta para tranferência: ')
        let numero2: string = input(`Numero da conta destino: `)
        let valor: number = Number(input('Valor a ser transferido: '))
        banco.transferir(numero2, numero, valor)
    } catch(error: any) {
        console.log((<Error>error).message)
    }
}

export function totalizacoes(): void {
    console.log("\nTotalizações\n");
    try{
        console.log(banco.depositoTotal());
    } catch(error: any) {
        console.log((<Error>error).message);
    }
}

export function renderJuros(): void {
    console.log("\nRender Juros\n")
    try{
        let numero: string = input('Número da conta para aplicação de juros: ');
        banco.renderJuros(numero);
    } catch(error: any) {
        console.log((<Error>error).message);
    }
}

function lerArquivoExterno(): void{
    try {
        let contas: Array<string> = fs.readFileSync("./contas/contas.txt").toString().split('\n')

        for(let elemento of contas){
            let dados = elemento.split(';')

            let [tipo, num, saldo, taxa]: string[] = dados

            if(tipo == 'P'){
                let conta: Poupanca = new Poupanca(num, Number(saldo), Number(taxa))
                banco.inserir(conta)
            }else if(tipo == 'I'){
                let conta: Imposto = new Imposto(num, Number(saldo), Number(taxa))
                banco.inserir(conta)
            }else if(tipo == 'C'){
                let conta: Conta4 = new Conta4(num, Number(saldo))
                banco.inserir(conta)
            }
        }
    } catch (error: any) {
        console.log(error.message)
    }
}