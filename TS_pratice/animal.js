"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    Animal.prototype.comunicar = function () {
        console.log("Olá sou da classe mãe");
    };
    return Animal;
}());
exports["default"] = Animal;
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(t, n, i, r) {
        var _this = _super.call(this, t, n, i) || this;
        _this.raça = r;
        return _this;
    }
    Cachorro.prototype.comunicar = function () {
        console.log("Olá sou da classe filha Cachorro");
    };
    return Cachorro;
}(Animal));
var Gente = /** @class */ (function (_super) {
    __extends(Gente, _super);
    function Gente(t, n, i, c) {
        var _this = _super.call(this, t, n, i) || this;
        _this.cor = c;
        return _this;
    }
    Gente.prototype.comunicar = function () {
        console.log("Olá sou da classe filha Gente");
    };
    return Gente;
}(Animal));
var c1 = new Cachorro("Cachorro", "Bob", 40, "Pitbull");
c1.comunicar();
var g1 = new Gente("Homem", "Haroldo", 12, "Pardo");
g1.comunicar();
