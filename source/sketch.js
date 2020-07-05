

function setup() {
    createCanvas(windowWidth, windowHeight);
    jogo = new Jogo();
    jogo.setup();

    telaInicial = new TelaInicial();
    botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height /2);

    cenas = {
        jogo,
        telaInicial        
    };

    frameRate(40);
    somJogo.loop();    
}

function draw() {
    cenas[cenaAtual].draw(); 
}

function keyPressed() {
    jogo.keyPressed(key);
}