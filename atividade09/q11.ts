import { Tributavel, SeguroDeVida, ContaCorrente } from "./q10";

export class AuditoriaInterna implements Tributavel{
    private _lista: Tributavel[] = []

    adicionar(tributavel: Tributavel): void {
            this._lista.push(tributavel);
    }

    calculaTributos(): number {
        let soma = 0;

        for(let item of this._lista) {
            soma += item.calculaTributos();
        }

        return soma;
    }
}

let CC1: ContaCorrente = new ContaCorrente('Arnaldo', 200)
let CC2: ContaCorrente = new ContaCorrente('Cruz', 134)
let S1: SeguroDeVida = new SeguroDeVida()

let auditoria: AuditoriaInterna = new AuditoriaInterna()
auditoria.adicionar(CC1)
auditoria.adicionar(CC2)
auditoria.adicionar(S1)

console.log(auditoria.calculaTributos())