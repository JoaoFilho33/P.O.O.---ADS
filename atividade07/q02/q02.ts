export class Calculadora2 {
    private _x: number;
    private _y: number;

    constructor(soma: number, sub: number) {
        this._x = soma;
        this._y = sub;
    }

    public get X(): number {
        return this._x;
    }

    public get Y(): number {
        return this._y;
    }

    public soma(): number {
        return this._x+this._y;
    }
}

/*let calc: Calculadora2 = new Calculadora2(2, 3);
console.log(calc.soma()); -> 5*/

