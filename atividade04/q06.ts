class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    ehTriangulo(): boolean {
        return (this.lado2 - this.lado3) < this.lado1 && this.lado1 < (this.lado3 + this.lado2);
    }

    ehIsoceles(): boolean {
        if (this.ehTriangulo()) {
            return this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3;
        }
        else {
            return false;
        }
    }

    ehEquilatero(): boolean {
        if (this.ehTriangulo()) {
            return this.lado1 == this.lado3 && this.lado1 == this.lado2;
        }
        else {
            return false;
        }
    }

    ehEscaleno(): boolean {
        if (this.ehTriangulo()) {
            return this.lado1 != this.lado3 && this.lado1 != this.lado2;
        }
        else {
            return false;
        }
    }
}
//teste true

let triangulo: Triangulo = new Triangulo(5,10,9)
let escaleno: Triangulo = new Triangulo(1, 2, 3)
let isoceles: Triangulo = new Triangulo(1, 1, 2)
let equilatero: Triangulo = new Triangulo(1,1,1)

console.log(triangulo.ehTriangulo())
console.log(isoceles.ehIsoceles())
console.log(equilatero.ehEquilatero())
console.log(escaleno.ehEscaleno())


//teste false
console.log("Teste False");

let trianguloB: Triangulo = new Triangulo(5,4,1)
let escalenoB: Triangulo = new Triangulo(2, 2, 2)
let isocelesB: Triangulo = new Triangulo(3, 1, 2)
let equilateroB: Triangulo = new Triangulo(2,1,1)

console.log(trianguloB.ehTriangulo())
console.log(isocelesB.ehIsoceles())
console.log(equilateroB.ehEquilatero())
console.log(escalenoB.ehEscaleno())