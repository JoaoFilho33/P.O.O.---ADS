class Calculadora {
    
    constructor(private _operando01: number, private _operando02: number) {}

    public soma(): number {
        return this._operando01 + this._operando02;
    }

    public multiplica(): number {
        return  this._operando01 * this._operando02;
    }
}

let calculo: Calculadora = new Calculadora(2, 3);
console.log(calculo.soma());// 5
console.log(calculo.multiplica());// 6

//Acesso aos atributos de forma direta:

// calculo._operando01 = 10; => A propriedade 'operando01' é particular e somente é acessível na classe 'Calculadora'
// calculo._operando02 = 1; ->

