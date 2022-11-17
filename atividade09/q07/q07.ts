export interface FiguraGeometrica2 {
    calcularArea(): number;
    calcularPer(): number;
}

export class Quadrado2 implements FiguraGeometrica2 {
    private _lado: number;
    constructor(lado: number) {
        this._lado = lado;
    }

    calcularArea(): number {
        return this._lado ** 2
    }

    calcularPer(): number {
        return this._lado * 4;
    }
}

export class Triangulo3 implements FiguraGeometrica2 {
    private _lado1: number;
    private _lado2: number;
    private _base: number;
    private _h: number;

    constructor(lado1: number, lado2: number, base: number, altura: number) {
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

export class Retangulo3 implements FiguraGeometrica2 {
    private _lado1: number;
    private _lado2: number;

    constructor(lado1: number, lado2: number) {
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
