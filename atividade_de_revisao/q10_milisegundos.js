import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const milissegundos = Number(input('Informe um valor em milissegundos: '))/1000

    const [dias, horas, minutos, segundos] = converter_valor(milissegundos)

    console.log(`${milissegundos} ms representam ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`)
}
function converter_valor(milissegundos){
    let resto
    const dias = Math.trunc(milissegundos/86400)
    resto = milissegundos % 86400
    const horas = Math.trunc(resto/3600)
    resto = resto % 3600
    const minutos = Math.trunc(resto/60)
    resto = resto % 60
    const segundos = resto
    return [dias, horas, minutos, segundos]
}


main()