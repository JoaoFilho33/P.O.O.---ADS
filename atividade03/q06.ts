function mostrar(...frase: any): void {
    console.log(frase)
}

mostrar('a', 'b')// [ 'a', 'b' ]
mostrar('a', 'b', 'c')// [ 'a', 'b', 'c' ]
mostrar('a', 'b', 'c', 'd')// [ 'a', 'b', 'c', 'd' ]