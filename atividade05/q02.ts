class Postagem {
    id: number;
    texto: string;
    qtdCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = 0;
    }

    curtir(): void {
        this.qtdCurtidas++;
    }

    toString(): string {
        return `Id: ${this.id} - curtidas: ${this.qtdCurtidas} - texto:  ${this.texto}\n`;
    }
}

class Microblog {
    postagens: Postagem[] = [];

    constructor(postagens: Postagem[] = []) {
        this.postagens = postagens;
    }

    incluirPostagem(...postagens: Array<Postagem>): void {
        this.postagens.push(...postagens);
    }

    excluirPostagem(id: number) {
        for(let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == id){
                this.postagens.splice(i, 1);
                break;
            }
        }
    }

    maisCurtido(): Postagem[] {
        let maisCurtida: Postagem[] = [];
        let maiorCurtida = 0;

        for(let i: number = 0; i < this.postagens.length; i++) {
            if(this.postagens[i].qtdCurtidas >= maiorCurtida) {
                maiorCurtida = this.postagens[i].qtdCurtidas;
            }
        }   

        for(let i: number = 0; i < this.postagens.length; i++) {
            if(this.postagens[i].qtdCurtidas == maiorCurtida) {
                maisCurtida.push(this.postagens[i]);
            }
        }

        return maisCurtida;
    }

    curtir(id: number) {
        for(let index in this.postagens) {
            if (this.postagens[index].id == id) {
                this.postagens[index].curtir();
            }
        }
    }

    toString(): string{
        let text: string = '';

        this.postagens.forEach((postagem) => text += `${postagem.toString()}\n`);

        return text;
    }
}