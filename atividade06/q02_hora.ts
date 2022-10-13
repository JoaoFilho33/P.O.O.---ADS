class Horas {
    
    constructor(private _horas: number, private _minutos: number, private _segundos: number) {}

    public lerH(): void {
        console.log(this._horas);
    }

    public lerMin(): void {
        console.log(this._minutos);
    }

    public lerS(): void {
        console.log(this._segundos);
    }

    public horario(): void {
        console.log(`${this._horas}:${this._minutos}:${this._segundos}`);
    }
}

let h: Horas = new Horas(1, 30, 23);

h.lerH()// 1
h.lerMin()// 30
h.lerS()// 23
h.horario()// 1:30:23


/*h._horas = 2 => ERRO por permitir acesso apenas dentro da classe horas
h._minutos //
h._segundos //*/