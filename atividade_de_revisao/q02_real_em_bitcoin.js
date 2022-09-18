import prompt from "prompt-sync"
const input = prompt()

function main(){
    const real = Number(input('Valor em real: '))
    //const cotacao = Number(input('Cotação atual do bitcoin: '))
    const cotacao = 120311.1
    const convercao = converter_real_em_bitcoin(real, cotacao)

    console.log(`Valor em bitcoin: ${convercao.toFixed(8)}`)
}

const converter_real_em_bitcoin = (real, cotacao) => real / cotacao


main()