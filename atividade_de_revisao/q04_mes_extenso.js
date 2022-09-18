import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const mes = Number(input('Mês: '))
    const mes_extenso = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    console.log(`O número ${mes} é referente ao mês de ${mes_extenso[mes-1]}`)
}


main()