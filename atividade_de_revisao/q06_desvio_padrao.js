import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let numero
    const vetor = []
    let count = 0
    while (numero !== -1) {
        numero = Number(input('Informe um número: '))
        if (numero === -1) {
            break
        }
        vetor[count] = numero
        count++
    }

    const soma = soma_vetor(vetor)
    const media = media_vetor(vetor)
    const desvio_padrao = calcular_dp(vetor, media)
    console.log(`Soma: ${soma}`)
    console.log(`Média: ${media}`)
    console.log(`Desvio Padrão: ${desvio_padrao}`)

}
function soma_vetor(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return soma
}

function media_vetor(vetor){
    const soma = soma_vetor(vetor)
    return (soma/vetor.length)
}

function calcular_dp(vetor, media){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += (media - vetor[i])**2
    }
    const dp = Math.sqrt(soma/vetor.length)

    return dp
}

main()