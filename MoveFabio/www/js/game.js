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
            game.load.spritesheet('dude','assets/dude.png',32,48);
            game.load.image('rect','assets/rect.png');
        }

        function create(){
            game.stage.backgroundColor = '#182d3b';
            button = game.add.button(10,10,'button',actionOnClick,this,1,0,1,0);
        }

        function update(){
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

            player = game.add.sprite(0,50,'dude',4);
            player.animations.add('left',[0,1,2,3],10,true);
            player.animations.add('right',[5,6,7,8],10,true);
            player.animations.add('down',[4,4,4,4],10,true);

            select = game.add.sprite(200,200,'select');
            select.animations.add('spawn');
            select.animations.play('spawn',5,true);
            select.inputEnabled = true;
            select.events.onInputDown.add(path,this);
        }

        function path(){
            initX = player.getBounds().x;
            initY = player.getBounds().y;
            endX = select.getBounds().x;
            endY = select.getBounds().y;

            xmed = 150 - initX;
            xmed2 = endY - 150;
            ymed = endY - initY;

            moveX(xmed);
        }

        function moveX(path){
            //game.add.tween(rect).to( { x: '+600' }, 2000, Phaser.Easing.Linear.None, true);
            if (path > 0) {
                tween = game.add.tween(player).to( { x: path }, 2000, Phaser.Easing.Linear.None, true);
                player.animations.play('right');
                tween.onComplete.add(onComplete, this); 
            }
            else{
                tween = game.add.tween(player).to( { x: path }, 2000, Phaser.Easing.Linear.None, true);
                player.animations.play('left');
                tween.onComplete.add(onComplete, this);
            }
        }

        function moveY(path){
            //game.add.tween(rect).to( { x: '+600' }, 2000, Phaser.Easing.Linear.None, true);
            if (path > 0) {
                tween = game.add.tween(player).to( { y: path }, 2000, Phaser.Easing.Linear.None, true);
                player.animations.play('down');
                tween.onComplete.add(onComplete, this); 
            }
            else{
                tween = game.add.tween(player).to( { y: path }, 2000, Phaser.Easing.Linear.None, true);
                player.animations.play('left');
                tween.onComplete.add(onComplete, this);
            }
        }

        function onComplete(){
            player.animations.stop(true,true);
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
