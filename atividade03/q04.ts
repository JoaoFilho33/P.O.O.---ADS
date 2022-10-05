let array: number[] = [1, 2, 3, 4];
let output: string = '';
let count: number = 1

array.forEach(function(array) {
    if (count < 4) {//count usado para quando chegar na última pos. do array o último traço não seja adicionado
        output += `${array}-`
        count++
    }
    else {
        output += `${array}`
    }
})

console.log(output)