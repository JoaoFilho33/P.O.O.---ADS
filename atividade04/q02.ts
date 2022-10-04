class Hotel {
    quantReservas: number = 0;

    constructor(quantReservas: number) {
        this.quantReservas = quantReservas;
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);

console.log(hotel.quantReservas);// 2