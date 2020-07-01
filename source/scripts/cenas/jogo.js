class Jogo {
    constructor() {
        this.indiceInimigoAtual = 0;
    }

    setup() {
        pontuacao = new Pontuacao();
        cenario = new Cenario(imagemCenario, 4);    
        cenarioGrama = new Cenario(imagemCenarioGrama, 4); 

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 80, 110, 135, 220, 270, somPulo);

        const inimigoGota = new Inimigo(matrizInimigo, imagemInimigoGota, width - 52, 80, 52, 52, 104, 104, 10, 100);
        const troll = new Inimigo(matrizTroll, imagemInimigoTroll, width, 50, 200, 200, 400, 400, 10, 100);
        const gotaVoadora = new Inimigo(matrizGotaVoadora, imagemInimigoGotaVoadora, width - 52, 250, 100, 75, 200, 150, 10, 100);

        inimigos.push(inimigoGota);
        inimigos.push(troll);
        inimigos.push(gotaVoadora);
    }

    keyPressed(key) {
        if (key  == 'ArrowUp') {
            personagem.pular();        
        }
    }

    draw() {
        cenario.exibir();
        cenario.mover();
    
        pontuacao.exibir();    
    
        personagem.exibir();  
        personagem.aplicarGravidade();  
    
        const inimigo = inimigos[this.indiceInimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
    
        inimigo.exibir();
        inimigo.mover();        
    
        if (inimigoVisivel) {
            this.indiceInimigoAtual++;        
            
            if (this.indiceInimigoAtual > (inimigos.length - 1))   {
                this.indiceInimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10,30));
        }
    
        if (personagem.detectarColisao(inimigo)) {
            image(imagemGameOver, width/2 - 200, height/3);
            noLoop();
        } else {
            pontuacao.adicionarPontos();
        }
        
        cenarioGrama.exibir();
        cenarioGrama.mover();
    }
}
