abstract class Funcionario {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): number;
}

class Gerente extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }

    public getBonificacao(): number {
        return this.salario * 1.4;
    }
}

class Diretor extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }

    public getBonificacao(): number {
        return this.salario * 1.6;
    }

}

class Presidente extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }

    public getBonificacao(): number {
        return this.salario + 1000;
    }
}

let f1: Funcionario = new Gerente(1000);
let f2: Funcionario = new Diretor(1000);
let f3: Funcionario = new Presidente(1000)

console.log(f1.getBonificacao());//1400
console.log(f2.getBonificacao());//1600
console.log(f3.getBonificacao());//2000