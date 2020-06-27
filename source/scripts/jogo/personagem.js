class Personagem extends Animacao {
    constructor(matriz, imagem, posicaoX, variacaoY,  largura, altura, larguraSprite, alturaSprite, somPulo) {
        super(matriz, imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite);
        this.gravidade = 6;
        this.velocidadePulo = 0;
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - variacaoY;
        this.y = this.yInicial;
        this.somPulo = somPulo;
        this.quantidadeMaximaPulos = 2;
        this.quantidadePulosConsecutivos = 0;
    }

    pular() {
        if (this.quantidadePulosConsecutivos < this.quantidadeMaximaPulos) {
            this.velocidadePulo = -50;
            this.somPulo.play();
            this.quantidadePulosConsecutivos++;
        }
    }

    aplicarGravidade() {
        this.y += this.velocidadePulo;
        this.velocidadePulo += this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.quantidadePulosConsecutivos = 0;
        }
    }

    detectarColisao(inimigo, mostrarAreas = false) {
        noFill();
        const precisao = .7;
        
        if (mostrarAreas) {
            rect(this.x, 
                this.y, 
                this.largura * precisao, 
                this.altura * precisao);
            rect(inimigo.x, 
                inimigo.y, 
                inimigo.largura * precisao, 
                inimigo.altura * precisao);
        }
        const colisao = collideRectRect(
            this.x, 
            this.y, 
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x, 
            inimigo.y, 
            inimigo.largura * precisao, 
            inimigo.altura * precisao);
        return colisao;    
    }
}