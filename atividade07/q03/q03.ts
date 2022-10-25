import { Calculadora2 } from "../q02/q02";

class CalculadoraCientifica extends Calculadora2{
    public exponenciar() {
        return this.X**this.Y;
    }
}

let CC2: CalculadoraCientifica;
CC2 = new CalculadoraCientifica(2, 3);

console.log(CC2.exponenciar());// 8
//sim, foi necessária a inclusão do método "set" para obter aos atributos privados da classe "Calculadora2"