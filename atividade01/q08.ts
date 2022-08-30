class Circulo {
    raio: number = 0;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return 3.14 * (this.raio * 2) * 2;
    }

    calcularPerimetro(): number {
        return 2*3.14 * this.raio
    }
}

let circulo = new Circulo(2);

console.log("Área: ", circulo.calcularArea());
console.log("Perímetro: ", circulo.calcularPerimetro());