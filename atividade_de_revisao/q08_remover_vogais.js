import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const texto = input('Informe uma frase: ').split('')
    const com_acentos = "ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç".split('')
    const sem_acentos = "AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc".split('')

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < com_acentos.length; j++) {
            if (texto[i] === com_acentos[j]) {
                texto[i] = sem_acentos[j]
            }
        }

    }

    console.log(texto.join(''))
}


main()