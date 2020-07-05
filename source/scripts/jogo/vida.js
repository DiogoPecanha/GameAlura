class Vida {
    constructor(total, inicial){
        this.total =  total;
        this.inicial = inicial;
        this.vidas = this.inicial;
        this.largura = 25;
        this.altura = 25;
        this.xInicial = 20;
        this.y = 20;
    }

    draw() {
        for (let index = 0; index < this.vidas; index++) {
            const margem = index * 10;
            const posicao = this.xInicial * (index + 1);
            image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
        }
    }

    ganharVidas(quantidadeVidas){
        if ((this.vidas + quantidadeVidas) < this.total){
            this.vidas += quantidadeVidas;
        } else {
            this.vidas = this.total;
        }
    }

    perderVidas(quantidadeVidas){
        this.vidas -= quantidadeVidas;
    }
}