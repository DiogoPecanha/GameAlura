class Inimigo extends Animacao {

    constructor(matriz, imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade)  {
        super(matriz, imagem, posicaoX,  variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
    }

    mover() {
        this.x -= this.velocidade;
    }

    reaparecer() {
        this.x = width;
    }
}