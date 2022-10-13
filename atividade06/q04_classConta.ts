import { Conta4 } from "./banco";

let conta: Conta4 = new Conta4("33", 400, "José");


//console.log(conta.numero) => Acesso direto negado podendo ser acessado apenas na classe 'Conta4'.

console.log(conta.Numero)//33 => nesse caso funcionou por causa do uso do método de acesso "get Numero", que retorna "numero"

//Se buscarmos todos os outros atributos com os métodos de acesso o comando será possível:
console.log(conta.Saldo)// 400
console.log(conta.Titular)// José


conta.depositar(200)// Deposita 200
console.log(conta.consultarSaldo())//Novo Saldo: 600

//como todos os métodos são públicos, as operações de depósito e consulta continuam funcionando