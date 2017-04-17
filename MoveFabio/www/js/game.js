var app = {
    inicio: function(){
        app.iniciaJuego();
    },

    iniciaJuego: function(){

        var alto = document.documentElement.clientHeight;
        var ancho = document.documentElement.clientWidth;
        var button;

        function preload(){
            //game.physics.startSystem(Phaser.Physics.ARCADE);
            game.load.spritesheet('button','assets/butsprite.png',200,52);
        }

        function create(){
            game.stage.backgroundColor = '#182d3b';
            button = game.add.button(10,10,'button',actionOnClick,this,1,0,1,0);

            button.onInputOver.add(over, this);
            button.onInputOut.add(out, this);
            button.onInputUp.add(up, this);
        }

        function update(){
        }

        function actionOnClick(){
            game.stage.backgroundColor = '#0a4b3e';
            button.destroy();
        }

        function over(){}
        function out(){}
        function up(){}

        var estados = {preload: preload, create: create, update: update};
        var game = new Phaser.Game(ancho, alto, Phaser.AUTO, 'phaser', estados);
    },

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        app.inicio();
    }, false);
}
