const array = [1, 2, 3, 4]
let output: string = ''
let count = 1

array.forEach((num: number) => {
    if (count < array.length) {
        output += `${num}-`
        count++
    }
    else {
        output += `${num}`
    }
})

console.log(output)