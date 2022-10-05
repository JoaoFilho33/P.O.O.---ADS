const array = [1, 2, 3, 4]
let output: string = ''
let count = 1

array.forEach((num: number) => {
    if (count < array.length) {//count usado para quando chegar na última pos. do array o último traço não seja adicionado
        output += `${num}-`
        count++
    }
    else {
        output += `${num}`
    }
})

console.log(output)