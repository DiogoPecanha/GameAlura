let imagemCenario;
let imagemPersonagem;
let imagemInimigoGota;
let cenario;
let personagem;
let inimigoGota;
let somJogo;
let somPulo;
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

function preload() {    
    imagemCenario = loadImage('imagens/cenario/floresta.png');    
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');        
    imagemInimigoGota =  loadImage('imagens/inimigos/gotinha.png');        
    somJogo = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 4);    
    personagem = new Personagem(imagemPersonagem);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270, somPulo);
    inimigoGota = new Inimigo(matrizInimigo, imagemInimigoGota, width - 52,  52, 52, 104, 104, 10);

    frameRate(40);
    //somJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();

    personagem.exibir();  
    personagem.aplicarGravidade();  

    inimigoGota.exibir();
    inimigoGota.mover();    

    if (personagem.detectarColisao(inimigoGota)) {
        console.log('Tomando taca');
        noLoop();
    }
}

function keyPressed() {
    if (key  == 'ArrowUp') {
        personagem.pular();        
    }
}
