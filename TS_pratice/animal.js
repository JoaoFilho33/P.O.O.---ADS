"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    comunicar() {
        console.log("Olá sou da classe mãe");
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(t, n, i, r) {
        super(t, n, i);
        this.raça = r;
    }
    comunicar() {
        console.log("Olá sou da classe filha Cachorro");
    }
}
class Gente extends Animal {
    constructor(t, n, i, c) {
        super(t, n, i);
        this.cor = c;
    }
    comunicar() {
        console.log("Olá sou da classe filha Gente");
    }
}
let c1 = new Cachorro("Cachorro", "Bob", 40, "Pitbull");
c1.comunicar();
let g1 = new Gente("Homem", "Haroldo", 12, "Pardo");
g1.comunicar();
