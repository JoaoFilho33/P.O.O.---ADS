import { JaEliminadoException } from "./excessoes";

interface Defensivel {
    estaEliminado(): boolean;

    defenderAtk(valorAtk: number): void;
}

class Guerreiro implements Defensivel{
    private _id: string;
    private _descricao: string;
    private _forcaAtk: number;
    private _life: number;

    constructor(id: string, descricao: string, forcaAtk: number = 10, life: number = 10) {
        this._id = id;
        this._descricao = descricao;
        this._forcaAtk = forcaAtk;
        this._life = life;
    }

    get Id(): string {
        return this._id;
    }

    get Life(): number {
        return this._life;
    }

    estaEliminado(): boolean {
        if(this._life == 0) {
            return true;
        }

        return false;
    }

    defenderAtk(valorAtk: number): number {
        this.estaEliminado() 
        return this._life -= valorAtk
    }

    atacar(defensivel: Defensivel): void {
        try{

            return defensivel.defenderAtk(this._forcaAtk)
        }
        catch(error: any) {
            throw new JaEliminadoException("Defensor já eliminado!")
        }
    }
}

class BaseMilitar implements Defensivel{
    private _id: string;
    private _latitude: string;
    private _longitude: string;
    private _damage: number;

    constructor(id: string, latitude: string, longitude: string, damage: number = 0) {
        this._id = id;
        this._latitude = latitude;
        this._longitude = longitude;
        this._damage = damage;
    }

    get Id(): string {
        return this._id;
    }

    estaEliminado(): boolean {
        if(this._damage >= 90) {
            return true;
        }

        return false;
    }

    defenderAtk(valorAtk: number): number {
        return this._damage += valorAtk;
    }
}  

class CenarioDeBatalha {
    constructor(private _defensivel1: Guerreiro[] = [], private _defensivel2: BaseMilitar[] = []) {}

    public avaliar() {
        //let aux;
        /*for(let pala of this._defensivel1) {
            aux = Infinity;
            if(pala.Life < aux) {
                ordenarVetor()
            }
        }*/
        this._defensivel1.sort();
        this._defensivel2.sort();

        this.vitoriaPala(this._defensivel1[this._defensivel1.length]);
        this.vitoriaBase(this._defensivel2[this._defensivel2.length]);
    }

    vitoriaPala(defPala: Guerreiro) {
        console.log(`Vitória do Guerreiro ${defPala.Id}`);
    }

    vitoriaBase(defBase: BaseMilitar) {
        console.log(`Vitória da Base ${defBase.Id}`);
    }
}

let pala1: Guerreiro = new Guerreiro("Joao", "Valente", 10, 10);
let pala2: Guerreiro = new Guerreiro("Joquim", "Destemido", 10, 10);
let pala3: Guerreiro = new Guerreiro("Paulo", "Rápido", 10, 10);


pala1.atacar(pala2);
pala2.atacar(pala3);
pala2.atacar(pala1);
pala3.atacar(pala1);

let resultado: CenarioDeBatalha = new CenarioDeBatalha("João")
