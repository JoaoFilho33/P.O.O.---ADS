abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPer(): number;
}

class Quadrado extends FiguraGeometrica {
    private _lado: number;
    constructor(lado: number) {
        super();
        this._lado = lado;
    }

    calcularArea(): number {
        return this._lado **2
    }

    calcularPer(): number {
        return this._lado * 4;
    }
}

class Triangulo2 extends FiguraGeometrica {
    private _lado1: number;
    private _lado2: number;
    private _base: number;
    private _h: number;

    constructor(lado1: number, lado2: number, base: number, altura: number) {
        super();
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._base = base;
        this._h = altura;
    }

    calcularArea(): number {
        return (this._base * this._h)/2
    }

    calcularPer(): number {
        return this._lado1 + this._lado2 + this._base
    }
}

class Retangulo2 extends FiguraGeometrica {
    private _lado1: number;
    private _lado2: number;

    constructor(lado1: number, lado2: number) {
        super();
        this._lado1 = lado1;
        this._lado2 = lado2;
    }

    calcularArea(): number {
        return this._lado1 * this._lado2
    }

    calcularPer(): number {
        return (this._lado1 * 2) + (this._lado2 * 2);
    }
}

let R: Retangulo2 = new Retangulo2(2, 3)

console.log(R.calcularArea());//6
console.log(R.calcularPer());//10