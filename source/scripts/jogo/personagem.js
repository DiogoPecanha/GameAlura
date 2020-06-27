class Personagem {
    constructor(imagem) {
        this.imagem = imagem;        
        this.matrizImagem = [[0, 0], [220, 0], [440, 0], [660, 0], [0, 270], [220, 270], [440, 270], [660, 270], [0, 540], [220, 540], [440, 540], [660, 540], [0, 810], [220, 810], [440, 810], [660, 810]];
        this.posicaoImagemAtual = 0;
    }

    exibe(){
        image(this.imagem, 0, height - 135, 110, 135, 
            this.matrizImagem[this.posicaoImagemAtual][0], 
            this.matrizImagem[this.posicaoImagemAtual][1], 
            220, 270);

            personagem.andar();
    }

    andar() {
        this.posicaoImagemAtual++;
        
        if (this.posicaoImagemAtual >= this.matrizImagem.length  - 1)
            this.posicaoImagemAtual = 0;
    }
}