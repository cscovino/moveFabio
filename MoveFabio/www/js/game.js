var app = {
    inicio: function(){
        app.iniciaJuego();
    },

    iniciaJuego: function(){

        var button;
        var background;

        function preload(){
            game.physics.startSystem(Phaser.Physics.ARCADE);
        }

        function create(){
            game.stage.backgroundColor = '#182d3b';
        }

        function update(){
        }

        var estados = {preload: preload, create: create, update: update};
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser', estados);
    },
};

if ('addEventListener' in document) {
    document.addEventListener('deviceready', function(){
        app.inicio();
    }, false);
}
