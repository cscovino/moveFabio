var app = {

    inicio: function(){
        app.iniciaJuego();
    },

    iniciaJuego: function(){

        var alto = document.documentElement.clientHeight;
        var ancho1 = document.documentElement.clientWidth/2; 
        var ancho = document.documentElement.clientWidth;
        var desks;
        var button;
        var select;

        function preload(){
            //game.load.spritesheet('button','assets/butsprite.png',200,52);
            //game.load.spritesheet('select','assets/selsprite.png',40,40);
            game.load.spritesheet('fabio','assets/spritesheet3.png',55,96);
            game.load.image('rect','assets/rect.png');
            game.load.image('backgnd','assets/salon3.png');

            game.load.image('eylin','assets/eyin.png');
            game.load.image('ifig','assets/ifi.png');
            game.load.image('ronel','assets/ronel.png');
            game.load.image('fab','assets/fabio.png');
            game.load.image('mafe','assets/mafe.png');
            game.load.image('smart','assets/smart.png');
            game.load.image('sco','assets/yo.png');
            game.load.image('ysa','assets/ysa.png');
        }

        function create(){
            game.stage.backgroundColor = '#182d3b';
            game.add.sprite(0,0,'backgnd');

            //button = game.add.button(10,10,'button',actionOnClick,this,1,0,1,0);

            desks = game.add.group();
            desks.enableBody = true;

            var dfab = desks.create(0, game.world.height/6 - 2, 'fab');
            dfab.body.immovable = true;

            var dsmart = desks.create(0, game.world.height/6 + 52, 'smart');
            dsmart.body.immovable = true;

            var dey = desks.create(0, game.world.height - 315, 'eylin');
            dey.body.immovable = true;

            var dsco = desks.create(0, game.world.height - 153, 'sco');
            dsco.body.immovable = true;

            var dysa = desks.create(game.world.width - 120, game.world.height/6 - 2, 'ysa');
            dysa.body.immovable = true;

            var dmafe = desks.create(game.world.width - 120, game.world.height/6 + 52, 'mafe');
            dmafe.body.immovable = true;

            var difig = desks.create(game.world.width - 120, game.world.height - 315, 'ifig');
            difig.body.immovable = true;

            var dronel = desks.create(game.world.width - 120, game.world.height - 153, 'ronel');
            dronel.body.immovable = true;

            player = game.add.sprite(0,0,'fabio',4);
            player.animations.add('down',[0,1,2,3],10,true);
            player.animations.add('up',[4,5,6,7],10,true);
            player.animations.add('right',[8,9,10,11],10,true);
            player.animations.add('left',[12,13,14,15],10,true);
            game.physics.arcade.enable(player);
            player.body.collideWorldBounds = true;

            //select = game.add.sprite(200,200,'select');
            //select.animations.add('spawn');
            //select.animations.play('spawn',5,true);
            //select.inputEnabled = true;
            //select.events.onInputDown.add(path,this);

            cursors = game.input.keyboard.createCursorKeys();
        }

        function update(){
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;

            if (cursors.left.isDown) {
                player.body.velocity.x = -190;

                player.animations.play('left');
            }
            else if (cursors.right.isDown) {
                player.body.velocity.x = 190;

                player.animations.play('right');
            }
            else if (cursors.up.isDown) {
                player.body.velocity.y = -190;

                player.animations.play('up');
            }
            else if (cursors.down.isDown) {
                player.body.velocity.y = 190;

                player.animations.play('down');
            }
            else{
                player.animations.stop();
                player.frame = 0;
            }

            var hitDesks = game.physics.arcade.collide(player, desks);
        }

        function render(){
            //game.debug.geom(rect, '#0fffff');
        }

        function actionOnClick(){
            game.stage.backgroundColor = '#0a4b3e';

            button.destroy();

            /*rect = game.add.sprite(0,0,'rect');
            rect.inputEnabled = true;
            rect.events.onInputDown.add(move, this);*/
        }

        var estados = {preload: preload, create: create, update: update};
        var game = new Phaser.Game(410, 630, Phaser.AUTO, 'phaser', estados);
    },

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        app.inicio();
    }, false);
}
