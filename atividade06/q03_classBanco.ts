import {Conta4, Banco4} from './banco'

let banco: Banco4 = new Banco4();
let conta: Conta4;
conta = new Conta4("23", 3000, "João");


banco.inserir(conta)
console.log("Passo 1:", banco.consultarSaldo("23"))// saldo: 3000
banco.sacar("23", 300);
console.log("Passo 2: ", banco.consultarSaldo("23"))// saldo: 2700
banco.depositar("23", 1000);
console.log("Passo 3: ", banco.consultarSaldo("23"));// saldo: 3700