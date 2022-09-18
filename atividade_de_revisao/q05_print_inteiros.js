import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numeros = input('Informe dois números: ').split(' ').map(Number)
    const vetor = []

    for (let i = 0; i < 2; i++) {
        if (numeros[i] === Math.trunc(numeros[i])) {
            vetor[i] = numeros[i]
        }
    }

    console.log(`Inteiros: ${vetor.join(', ')}`)
}


main()