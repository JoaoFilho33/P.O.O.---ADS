var Carro = /** @class */ (function () {
    function Carro(c, a, v) {
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }
    Carro.prototype.getValor = function () {
        return this.valor;
    };
    Carro.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Carro.prototype.getLog = function () {
        console.log("Segue o log dessa informação: ");
        this.getInfo();
    };
    Carro.prototype.getInfo = function () {
        console.log("".concat(this.cor, ", ").concat(this.ano, ", ").concat(this.valor));
    };
    return Carro;
}());
var c = new Carro("preto", 2020, 20000);
c.getLog();
