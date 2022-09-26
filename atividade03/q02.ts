function eh_primo(x: number): boolean {
    let div: number = 0

    for(let i:number = 1; i <= x; i++) {
        if(x%i == 0) {
            div++
        }
    }

    if(div > 2) {
        return false
    }
    else {
        return true
    }
}