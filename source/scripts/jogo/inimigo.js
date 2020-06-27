class Inimigo extends Animacao {

    constructor(matriz, imagem, posicaoX,  largura, altura, larguraSprite, alturaSprite, velocidade)  {
        super(matriz, imagem, posicaoX,  largura, altura, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
    }

    mover() {
        this.x -= this.velocidade;

        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}