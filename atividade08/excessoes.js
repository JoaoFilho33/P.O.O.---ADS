"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoupancaInvalidaError = exports.ValorInvalidoError = exports.SaldoInsuficienteError = exports.ContaInexistenteError = exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class ContaInexistenteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;
class SaldoInsuficienteError extends ContaInexistenteError {
    constructor(message) {
        super(message);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;
class ValorInvalidoError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ValorInvalidoError = ValorInvalidoError;
class PoupancaInvalidaError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.PoupancaInvalidaError = PoupancaInvalidaError;
