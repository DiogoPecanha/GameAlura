class Jogo {
    constructor() {
        this.indiceInimigoAtual = 0;     
        this.mapa = fita.mapa;   
        console.log(fita);
    }

    setup() {
        pontuacao = new Pontuacao();
        cenario = new Cenario(imagemCenario, 4);    
        cenarioGrama = new Cenario(imagemCenarioGrama, 4); 
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 80, 110, 135, 220, 270, somPulo);

        const inimigoGota = new Inimigo(matrizInimigo, imagemInimigoGota, width - 52, 80, 52, 52, 104, 104, 10);
        const troll = new Inimigo(matrizTroll, imagemInimigoTroll, width, 50, 200, 200, 400, 400, 10);
        const gotaVoadora = new Inimigo(matrizGotaVoadora, imagemInimigoGotaVoadora, width - 52, 250, 100, 75, 200, 150, 10);

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
    
        vida.draw();
        pontuacao.exibir();    
    
        personagem.exibir();  
        personagem.aplicarGravidade();  

        const linhaAtual = this.mapa[this.indiceInimigoAtual];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
    
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibir();
        inimigo.mover();        
    
        if (inimigoVisivel) {
            this.indiceInimigoAtual++;        
            inimigo.reaparecer();
            if (this.indiceInimigoAtual > (this.mapa.length - 1))   {
                this.indiceInimigoAtual = 0;
            }
            
        }

        if (personagem.detectarColisao(inimigo)) {
            vida.perderVidas(1);
            personagem.ficarInvencivel();

            if (vida.vidas <= 0) {
                image(imagemGameOver, width/2 - 200, height/3);
                noLoop();
            }
        } else {
            pontuacao.adicionarPontos();
        }
        
        cenarioGrama.exibir();
        cenarioGrama.mover();
    }
}
