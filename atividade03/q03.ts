function cumprimento(nome: string, pronome: string) {
    if (!pronome) {
        console.log(`Sr. ${nome}`)
    }
    else {
        console.log(`${pronome}. ${nome}`)
    }
}