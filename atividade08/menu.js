"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderJuros = exports.totalizacoes = exports.transferir = exports.excluir = exports.depositar = exports.sacar = exports.consultar = exports.inserir = void 0;
var input = require('prompt-sync')();
const fs = __importStar(require("fs"));
const banco_1 = require("././banco/banco");
const funcoes_1 = require("./funcoes");
let banco = new banco_1.Banco4();
let opcao = '';
let continuar = '';
lerArquivoExterno();
do {
    try {
        console.log('Bem vindo\nDigite uma opção:');
        console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
            '4 - Depositar 5 - Excluir 6 - Transferir\n' +
            '7 – Totalizações 8 - Render Juros\n' +
            '0 - Sair\n');
        opcao = input("Opção: ");
        switch (opcao) {
            case '1':
                inserir();
                break;
            case '2':
                consultar();
                break;
            case '3':
                sacar();
                break;
            case '4':
                depositar();
                break;
            case '5':
                excluir();
                break;
            case '6':
                transferir();
                break;
            case '7':
                totalizacoes();
                break;
            case '8':
                renderJuros();
                break;
        }
        (0, funcoes_1.ehValido)(opcao);
        continuar = input("\nPress <ENTER> to continue");
        console.clear();
    }
    catch (error) {
        console.log(error.message);
    }
} while (opcao != '0');
function inserir() {
    console.log("\nCadastrar conta\n");
    try {
        let numero = input('Digite o número da conta: ');
        let opcao = input('\nCriar conta do Tipo 1 - Corrente, 2 - Poupança, 3 - Imposto: ');
        if (opcao == "1") {
            contaCorrente(numero, 0);
        }
        else if (opcao == "2") {
            contaPoupanca(numero, 0);
        }
        else if (opcao == "3") {
            contaImposto(numero, 0);
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.inserir = inserir;
function contaCorrente(numero, saldo) {
    let conta;
    conta = new banco_1.Conta4(numero, saldo);
    banco.inserir(conta);
}
function contaPoupanca(numero, saldo) {
    let taxaJuros = Number(input('\nTaxa de juros: '));
    let poupanca = new banco_1.Poupanca(numero, saldo, taxaJuros);
    banco.inserir(poupanca);
}
function contaImposto(numero, saldo) {
    let taxaDesconto = Number(input('\nTaxa de desconto: '));
    let imposto = new banco_1.Imposto(numero, saldo, taxaDesconto);
    banco.inserir(imposto);
}
function consultar() {
    console.log("\nConsultar Conta\n");
    try {
        let numero = input('Digite o numero da conta: ');
        console.log(banco.consultar(numero));
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.consultar = consultar;
function sacar() {
    console.log("\nSacar\n");
    try {
        let numero = input('Digite o numero da conta: ');
        let valor = Number(input('Valor que deseja sacar: '));
        banco.sacar(numero, valor);
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.sacar = sacar;
function depositar() {
    console.log("\nDepositar\n");
    try {
        let numero = input('Digite o numero da conta: ');
        let valor = Number(input('Valor deposito: '));
        banco.depositar(numero, valor);
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.depositar = depositar;
function excluir() {
    console.log("\nExcluir\n");
    try {
        let numero = input('Digite o numero da conta: ');
        banco.excluir(numero);
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.excluir = excluir;
function transferir() {
    console.log("\nTransferir\n");
    try {
        let numero = input('Numero da conta para tranferência: ');
        let numero2 = input(`Numero da conta destino: `);
        let valor = Number(input('Valor a ser transferido: '));
        banco.transferir(numero2, numero, valor);
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.transferir = transferir;
function totalizacoes() {
    console.log("\nTotalizações\n");
    try {
        console.log(banco.depositoTotal());
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.totalizacoes = totalizacoes;
function renderJuros() {
    console.log("\nRender Juros\n");
    try {
        let numero = input('Número da conta para aplicação de juros: ');
        banco.renderJuros(numero);
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.renderJuros = renderJuros;
function lerArquivoExterno() {
    try {
        let contas = fs.readFileSync("./contas/contas.txt").toString().split('\n');
        for (let elemento of contas) {
            let dados = elemento.split(';');
            let [tipo, num, saldo, taxa] = dados;
            if (tipo == 'P') {
                let conta = new banco_1.Poupanca(num, Number(saldo), Number(taxa));
                banco.inserir(conta);
            }
            else if (tipo == 'I') {
                let conta = new banco_1.Imposto(num, Number(saldo), Number(taxa));
                banco.inserir(conta);
            }
            else if (tipo == 'C') {
                let conta = new banco_1.Conta4(num, Number(saldo));
                banco.inserir(conta);
            }
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
