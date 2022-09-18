import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const vetor = input('Informe 5 valores inteiros: ').split(' ').map(Number)

    const crescente = ordenar_crescente(vetor)
    const decrescente = ordenar_decrescente(crescente)
    
    console.log(`Crescente: ${crescente}`)
    console.log(`Decrescente: ${decrescente}`)
}

function ordenar_crescente(vetor){
    let ordenar = 0
    let aux
    let j = 0
    while(ordenar === 0){
        ordenar = 1
        for(let i = 0; i < vetor.length-j; i++){
            if(vetor[i] > vetor[i+1]){
                aux = vetor[i]
                vetor[i] = vetor[i+1]
                vetor[i+1] = aux
                ordenar = 0
            }
        }
        j++
    }

    return vetor
}

function ordenar_decrescente(vetor){
    const new_vetor = []
    let j = vetor.length-1
    for(let i = 0; i < vetor.length; i++){
        new_vetor[i] = vetor[j]
        j--
    }

    return new_vetor
}

main()