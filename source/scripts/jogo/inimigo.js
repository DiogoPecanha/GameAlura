class Inimigo extends Animacao {

    constructor(matriz, imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay)  {
        super(matriz, imagem, posicaoX,  variacaoY, largura, altura, larguraSprite, alturaSprite, delay);

        this.velocidade = velocidade;
        this.delay = delay;
    }

    mover() {
        this.x -= this.velocidade;

        if (this.x < -this.largura - this.delay) {
            this.x = width;
        }
    }
}