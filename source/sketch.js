

function setup() {
    createCanvas(windowWidth, windowHeight);
    jogo = new Jogo();
    jogo.setup();

    telaInicial = new TelaInicial();


    frameRate(40);
    //somJogo.loop();

    cenas = {
        jogo,
        telaInicial        
    };
}

function draw() {
    cenas[cenaAtual].draw(); 
}

function keyPressed() {
    jogo.keyPressed(key);
}