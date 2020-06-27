let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somJogo;

function preload() {    
    imagemCenario = loadImage('imagens/cenario/floresta.png');    
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');        
    somJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 4);    
    personagem = new Personagem(imagemPersonagem);
    frameRate(40);
    //somJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();

    personagem.exibe();    
}
