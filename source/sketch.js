let imagemCenario;
let imagemCenarioGrama;
let imagemPersonagem;
let imagemInimigoGota;
let imagemInimigoGotaVoadora;
let imagemGameOver;
let cenario;
let cenarioGrama;
let personagem;
let somJogo;
let somPulo;
let pontuacao;

const matrizInimigo = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626]
  ];

const matrizPersonagem = [
    [0, 0], 
    [220, 0], 
    [440, 0], 
    [660, 0], 
    [0, 270], 
    [220, 270], 
    [440, 270], 
    [660, 270], 
    [0, 540], 
    [220, 540], 
    [440, 540], 
    [660, 540], 
    [0, 810], 
    [220, 810], 
    [440, 810], 
    [660, 810]
];

const matrizTroll = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
  ];

const matrizGotaVoadora = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ];
  
const inimigos = [];  

function preload() {    
    imagemCenario = loadImage('imagens/cenario/floresta.png');    
    imagemCenarioGrama = loadImage('imagens/cenario/floresta_chao.png');    
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');        
    imagemInimigoGota =  loadImage('imagens/inimigos/gotinha.png');        
    imagemInimigoTroll =  loadImage('imagens/inimigos/troll.png');        
    imagemGameOver =  loadImage('imagens/assets/game-over.png');        
    imagemInimigoGotaVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');        
    somJogo = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    pontuacao = new Pontuacao();
    cenario = new Cenario(imagemCenario, 4);    
    cenarioGrama = new Cenario(imagemCenarioGrama, 4); 
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 80, 110, 135, 220, 270, somPulo);
    
    const inimigoGota = new Inimigo(matrizInimigo, imagemInimigoGota, width - 52, 80, 52, 52, 104, 104, 10, 200);
    const troll = new Inimigo(matrizTroll, imagemInimigoTroll, width - 300, 50, 200, 200, 400, 400, 10, 800);
    const gotaVoadora = new Inimigo(matrizGotaVoadora, imagemInimigoGotaVoadora, width - 52, 180, 100, 75, 200, 150, 10, 1500);

    inimigos.push(inimigoGota);
    inimigos.push(troll);
    inimigos.push(gotaVoadora);
    
    frameRate(40);
    //somJogo.loop();
}

function draw() {
    cenario.exibir();
    cenario.mover();

    pontuacao.exibir();    

    personagem.exibir();  
    personagem.aplicarGravidade();  

    inimigos.forEach(inimigo => {
        inimigo.exibir();
        inimigo.mover();        

        if (personagem.detectarColisao(inimigo)) {
            image(imagemGameOver, width/2 - 200, height/2);
            noLoop();
        } else {
            pontuacao.adicionarPontos();
        }
    });
    cenarioGrama.exibir();
    cenarioGrama.mover();
}

function keyPressed() {
    if (key  == 'ArrowUp') {
        personagem.pular();        
    }
}
