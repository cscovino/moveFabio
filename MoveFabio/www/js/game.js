var app = {

    inicio: function(){
        app.iniciaJuego();
    },

    iniciaJuego: function(){

        var alto = document.documentElement.clientHeight;
        var ancho = document.documentElement.clientWidth;
        var button;
        var rect;
        var select;

        function preload(){
            game.load.spritesheet('button','assets/butsprite.png',200,52);
            game.load.spritesheet('select','assets/selsprite.png',40,40);
            game.load.spritesheet('fabio','assets/spritesheet3.png',55,96);
            game.load.image('rect','assets/rect.png');
        }

        function create(){
            game.stage.backgroundColor = '#182d3b';
            button = game.add.button(10,10,'button',actionOnClick,this,1,0,1,0);

            player = game.add.sprite(0,50,'fabio',4);
            player.animations.add('down',[0,1,2,3],8,true);
            player.animations.add('up',[4,5,6,7],8,true);
            player.animations.add('right',[8,9,10,11],8,true);
            player.animations.add('left',[12,13,14,15],8,true);
            game.physics.arcade.enable(player);
            player.body.collideWorldBounds = true;

            select = game.add.sprite(200,200,'select');
            select.animations.add('spawn');
            select.animations.play('spawn',5,true);
            select.inputEnabled = true;
            //select.events.onInputDown.add(path,this);

            cursors = game.input.keyboard.createCursorKeys();
        }

        function update(){
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;

            if (cursors.left.isDown) {
                player.body.velocity.x = -500;

                player.animations.play('left');
            }
            else if (cursors.right.isDown) {
                player.body.velocity.x = 500;

                player.animations.play('right');
            }
            else if (cursors.up.isDown) {
                player.body.velocity.y = -500;

                player.animations.play('up');
            }
            else if (cursors.down.isDown) {
                player.body.velocity.y = 500;

                player.animations.play('down');
            }
            else{
                player.animations.stop();
                player.frame = 0;
            }
        }

        function render(){
            game.debug.geom(rect, '#0fffff');
        }

        function actionOnClick(){
            game.stage.backgroundColor = '#0a4b3e';

            button.destroy();

            /*rect = game.add.sprite(0,0,'rect');
            rect.inputEnabled = true;
            rect.events.onInputDown.add(move, this);*/
        }

        var estados = {preload: preload, create: create, update: update, render: render};
        var game = new Phaser.Game(ancho, alto, Phaser.AUTO, 'phaser', estados);
    },

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        app.inicio();
    }, false);
}
