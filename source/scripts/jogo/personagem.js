class Personagem extends Animacao {
    constructor(matriz, imagem, posicaoX,  largura, altura, larguraSprite, alturaSprite, somPulo) {
        super(matriz, imagem, posicaoX,  largura, altura, larguraSprite, alturaSprite);
        this.gravidade = 3;
        this.velocidadePulo = 0;
        this.yInicial = height - this.altura;
        this.y = this.yInicial;
        this.somPulo = somPulo;
    }

    pular() {
        this.velocidadePulo = -35;
        this.somPulo.play();
    }

    aplicarGravidade() {
        this.y += this.velocidadePulo;
        this.velocidadePulo += this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
        }
    }

    detectarColisao(inimigo) {
        const precisao = .7;

        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao,
            inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
        return colisao;    
    }
}