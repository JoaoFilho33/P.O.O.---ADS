"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco4 = exports.Imposto = exports.Poupanca = exports.Conta4 = void 0;
const excessoes_1 = require("../excessoes");
const menu_1 = require("../menu");
class Conta4 {
    constructor(_numero, _saldo) {
        this._numero = _numero;
        this._saldo = _saldo;
    }
    get Numero() {
        return this._numero;
    }
    get Saldo() {
        return this._saldo;
    }
    sacar(valor) {
        this.validarValor(valor);
        if (valor > this._saldo) {
            throw new excessoes_1.SaldoInsuficienteError('Saldo Insuficiente');
        }
        else {
            this._saldo = this._saldo - valor;
        }
    }
    depositar(valor) {
        this.validarValor(valor);
        this._saldo = this._saldo + valor;
    }
    consultarSaldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    validarValor(valor) {
        if (valor < 0) {
            throw new excessoes_1.ValorInvalidoError("Valor Inválido!");
        }
    }
}
exports.Conta4 = Conta4;
class Poupanca extends Conta4 {
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
    renderJuros() {
        this.depositar(this.Saldo * this._taxaJuros / 100);
    }
}
exports.Poupanca = Poupanca;
class Imposto extends Conta4 {
    constructor(numero, saldo, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    debitar(valor) {
        let total = valor + valor * (this._taxaDesconto / 100);
        super.sacar(total);
    }
}
exports.Imposto = Imposto;
class Banco4 {
    constructor(_contas = []) {
        this._contas = _contas;
    }
    inserir(conta) {
        try {
            this.consultarIndice(conta.Numero); //se for executado
            throw new excessoes_1.AplicacaoError("Essa conta já Existe!");
        }
        catch (error) {
            this._contas.push(conta);
            console.log(error.message);
        }
    }
    consultar(numero) {
        for (let c of this._contas) {
            if (c.Numero == numero) {
                return c;
            }
        }
        throw new excessoes_1.ContaInexistenteError("Conta Inexistente!");
    }
    consultarIndice(numero) {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].Numero == numero) {
                return i;
            }
        }
        throw new excessoes_1.ContaInexistenteError("Conta Inexistente!");
    }
    alterar(conta) {
        try {
            let indice = this.consultarIndice(conta.Numero);
            this._contas[indice] = conta;
        }
        catch (error) {
            console.log(error.message);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta instanceof Imposto) {
            conta.debitar(valor);
        }
        else {
            conta.sacar(valor);
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        conta.depositar(valor);
    }
    transferir(numCredito, numDebito, valor) {
        let conta1 = this.consultar(numCredito);
        let conta2 = this.consultar(numDebito);
        conta2.transferir(conta1, valor);
    }
    quantidadeContas() {
        return this._contas.length;
    }
    depositoTotal() {
        let soma = 0;
        for (let i = 0; i < this._contas.length; i++) {
            soma += this._contas[i].Saldo;
        }
        return soma;
    }
    mediaTotal() {
        let media = this.depositoTotal() / this.quantidadeContas();
        return media;
    }
    excluir(numero) {
        try {
            let indice = this.consultarIndice(numero);
            this._contas.splice(indice, 1);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    renderJuros(numero) {
        try {
            for (let i = 0; i < this._contas.length; i++) {
                this.consultarIndice(numero);
                if (this._contas[i] instanceof Poupanca) {
                    this._contas[i].renderJuros();
                }
            }
        }
        catch (_a) {
            throw new excessoes_1.ContaInexistenteError("Conta Poupança inexistente!");
        }
    }
}
exports.Banco4 = Banco4;
(0, menu_1.showMenu)();
