export default class Animal {
    tipo: string;
    nome: string;
    idade: number;

    constructor(t: string, n: string, i: number) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }

    public comunicar(): void{
        console.log("Olá sou da classe mãe")
    }
}

class Cachorro extends Animal {
    raça: string;

    constructor(t: string, n: string, i: number, r: string) {
        super(t, n, i);
        this.raça = r;
    }

    public comunicar(){
        console.log("Olá sou da classe filha Cachorro")
    }
}

class Gente extends Animal {
    cor: string;

    constructor(t: string, n: string, i: number, c: string) {
        super(t, n, i);
        this.cor = c;
    }

    public comunicar(){
        console.log("Olá sou da classe filha Gente")
    }
}

let c1 = new Cachorro("Cachorro", "Bob", 40, "Pitbull");
c1.comunicar();

let g1 = new Gente("Homem", "Haroldo", 12, "Pardo");
g1.comunicar();