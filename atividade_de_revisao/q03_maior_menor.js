import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const valores = input('Informe três valores inteiros. (Ex: 1 2 3): ').split(' ').map(Number)
    let maior = buscar_maior(valores[0], valores[1], valores[2])
    let menor = buscar_menor(valores[0], valores[1], valores[2])

    console.log(`Maior: ${maior}`)
    console.log(`Menor: ${menor}`)
}
function buscar_maior(n1, n2, n3){
    let maior
    if(n1>n2 && n1>n3){
        maior = n1
    }
    else if(n2>n1 && n2>n3){
        maior = n2
    }
    else if(n3>n1 && n3>n2){
        maior = n3
    }
    return maior
}

function buscar_menor(n1, n2, n3){
    let menor
    if(n1<n2 && n1<n3){
        menor = n1
    }
    else if(n2<n1 && n2<n3){
        menor = n2
    }
    else if(n3<n1 && n3<n2){
        menor = n3
    }
    return menor
}


main()