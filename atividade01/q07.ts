class Retangulo {
    l1: number = 0;
    l2: number = 0;

    constructor(l1: number, l2: number) {
        this.l1 = l1;
        this.l2 = l2;
    }

    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): Number {
        return this.l1*2 + this.l2*2;
    }
}

let retangulo = new Retangulo(2, 3);

console.log("Área: ", retangulo.calcularArea());
console.log("Perímetro: ", retangulo.calcularPerimetro());
