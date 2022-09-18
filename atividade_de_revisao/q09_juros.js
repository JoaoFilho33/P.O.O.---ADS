import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const valor = input('Informe um valor em reais: ').split(' ').map(Number)
    const taxa_juros = Number(input('Informe uma taxa de juros: '))

    for(let i = 0; i < 12; i++){
        let juros = calcular_juros_mes(valor[i], taxa_juros)
        valor.push(juros) 
    }
    console.log(`R$ ${valor}`)

}
function calcular_juros_mes(valor, taxa_juros){
    return (valor * (taxa_juros/100)) + valor
}


main()