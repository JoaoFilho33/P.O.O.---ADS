class Veiculo {
    placa: string;
    ano: number;
    constructor(placa: string, ano: number) {
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro2 extends Veiculo {// Eu ja havia feito uma classe Carro nesse diretório por isso -> Carro2
    modelo: string;
    constructor(modelo: string, placa: string, ano: number) {
        super(placa, ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro2 {
    autonomiaBateria: number;
    constructor(automiaBateria: number, modelo: string, placa: string, ano: number) {
        super(modelo, placa, ano);
        this.autonomiaBateria = automiaBateria;
    }
}

let carro: Carro2 = new Carro2("Uno", "XYZ123", 2011);
let carroE: CarroEletrico = new CarroEletrico(5000, "Tesla", "TES321", 2020)

console.log(carro);// Carro2 { placa: 'XYZ123', ano: 2011, modelo: 'Uno' }
console.log(carroE);// CarroEletrico {placa: 'TES321', ano: 2020, modelo: 'Tesla', autonomiaBateria: 5000}