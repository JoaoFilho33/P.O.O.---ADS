import {Retangulo3, Quadrado2, Triangulo3} from "./q07"

class TesteFiguras {
    private r1: Retangulo3 = new Retangulo3(2, 3)
    private q1: Quadrado2 = new Quadrado2(2)
    private t1: Triangulo3 = new Triangulo3(3, 3, 4, 2)

    print() {
        console.log(this.r1.calcularArea());//6
        console.log(this.r1.calcularPer());//10

        console.log(this.q1.calcularArea());//4
        console.log(this.q1.calcularPer());//8

        console.log(this.t1.calcularArea());//4
        console.log(this.t1.calcularPer());//10
    }
}

let teste: TesteFiguras = new TesteFiguras();
teste.print()