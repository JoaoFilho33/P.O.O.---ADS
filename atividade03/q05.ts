function soma(x: number, y?: any): number {
    return x+y
}
//a
console.log(soma(1, 2))// 3
//b
console.log(soma(1, "2"))// "12"
//c
console.log(soma(1))// NaN