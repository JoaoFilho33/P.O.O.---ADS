var Pessoa = /** @class */ (function () {
    function Pessoa(n, i) {
        this.nome = n;
        this.idade = i;
    }
    return Pessoa;
}());
var p1 = new Pessoa("João", 18);
console.log("Nome: ".concat(p1.nome, ", Idade: ").concat(p1.idade));
