class Radio {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}
let r: Radio = new Radio(0);// Ocorria um erro porque o método constructor da classe rádio não recebia argumentos
r.volume = 10;              // Por isso, ao definir um valor ao construtor fora ou dentro da classe, resolveria 
                            // problema
console.log(r.volume)// 10