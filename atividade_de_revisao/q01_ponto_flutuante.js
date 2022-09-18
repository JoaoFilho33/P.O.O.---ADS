import prompt from "prompt-sync"
const input = prompt()

function main(){
    const valor = 2.56
    const sucessor = buscar_sucessor(valor)
    const antecessor = buscar_antecessor(valor)
    console.log(`Valor: ${valor}`)
    console.log(`Sucessor: ${sucessor}`)
    console.log(`Antecessor: ${antecessor}`)
}
const buscar_sucessor = (decimal) => Math.floor(decimal + 1)

const buscar_antecessor = (decimal) => Math.ceil(decimal - 1)


main()