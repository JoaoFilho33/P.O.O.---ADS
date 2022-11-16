
import { SaldoInsuficienteError, ValorInvalidoError, ContaInexistenteError, AplicacaoError } from "../excessoes";
import { showMenu } from "../menu";


export class Conta4 {

    constructor(private _numero: string, private _saldo: number) {}

    public get Numero(): string {
        return this._numero;
    }

    public get Saldo(): number {
        return this._saldo;
    }

    public sacar(valor: number): void {
        this.validarValor(valor);
        if(valor > this._saldo) {
            throw new SaldoInsuficienteError('Saldo Insuficiente');
        }else{
            this._saldo = this._saldo - valor;
        }

    }

    public depositar(valor: number): void { 
        this.validarValor(valor);
        this._saldo = this._saldo + valor;
    }

    public consultarSaldo() {
        return this._saldo;
    }

    public transferir(contaDestino: Conta4, valor: number) {
        this.sacar(valor)
        contaDestino.depositar(valor)
    }

    private validarValor(valor: number) {
        if(valor < 0) {
            throw new ValorInvalidoError("Valor Inválido!")
        }
    }
}

export class Poupanca extends Conta4{
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    public get taxaJuros(): number {
        return this._taxaJuros;
    }

    public renderJuros(): void {
        this.depositar(this.Saldo * this._taxaJuros/100);
    }
}

export class Imposto extends Conta4 {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDesconto: number) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }

    debitar(valor: number): void {
        let total = valor + valor * (this._taxaDesconto/100);
        super.sacar(total);
    }
}

export class Banco4 {

    constructor(private _contas: Conta4[] = []) {}

    public inserir(conta: Conta4): void {
        try{
            this.consultarIndice(conta.Numero);//se for executado
            throw new AplicacaoError("Essa conta já Existe!");
        } catch (error: any){
            this._contas.push(conta);
            console.log((<Error>error).message);
        }
    }

    public consultar(numero: string): Conta4 {
        for (let c of this._contas) {
            if (c.Numero == numero) {
                return c;
            }
        }

        throw new ContaInexistenteError("Conta Inexistente!")
    }

    private consultarIndice(numero: string): number {
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].Numero == numero) {
                return i
            }
        }   

        throw new ContaInexistenteError("Conta Inexistente!")
    }

    alterar(conta: Conta4) {
        try{
            let indice: number = this.consultarIndice(conta.Numero);
            this._contas[indice] = conta;
        }catch (error: any) {
            console.log((<Error>error).message)
        }
    }

    public sacar(numero: string, valor: number): void {
        let conta: Conta4 = this.consultar(numero);
        if(conta instanceof Imposto) {
            conta.debitar(valor);
        }
        else {
            conta.sacar(valor);
        }
        
    }

    public depositar(numero: string, valor: number): void {
        let conta: Conta4 = this.consultar(numero);
        conta.depositar(valor);
    }

    public transferir(numCredito: string, numDebito: string, valor: number): void {
        let conta1: Conta4 = this.consultar(numCredito);
        let conta2: Conta4 = this.consultar(numDebito);

        conta2.transferir(conta1, valor);
    }

    public quantidadeContas(): number {
        return this._contas.length;
    }

    public depositoTotal(): number {
        let soma = 0

        for (let i = 0; i < this._contas.length; i++) {
            soma += this._contas[i].Saldo
        }

        return soma
    }

    public mediaTotal(): number {
        let media: number = this.depositoTotal() / this.quantidadeContas();

        return media;
    }

    public excluir(numero: string): void {
       try{
            let indice = this.consultarIndice(numero);
            this._contas.splice(indice, 1);
       } catch(error: any) {
            console.log((<Error>error).message);
       }
        
    }

    public renderJuros(numero: string): void{
        try{
            for (let i = 0; i < this._contas.length; i++) {
                this.consultarIndice(numero)
                if(this._contas[i] instanceof Poupanca){
                    (<Poupanca> this._contas[i]).renderJuros();
                }
            } 
        }
        catch{
            throw new ContaInexistenteError("Conta Poupança inexistente!")
        }
    }
}

showMenu()