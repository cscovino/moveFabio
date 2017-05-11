var app = {

    iniciaJuego: function(){

        var alto = document.documentElement.clientHeight;
        var ancho1 = document.documentElement.clientWidth/2; 
        var ancho = document.documentElement.clientWidth;
        var desks, chairs;
        var button;
        var select;
        var leftKey, rightKey, upKey, downKey, spaceKey;

        var menu = {
            preload: function(){
                game.load.spritesheet('button','assets/butsprite.png',200,52);
                
            },

            create: function(){
                game.stage.backgroundColor = '#182d3b';

                button = game.add.button(10,10,'button',menu.actionOnClick,this,1,0,1,0);
            },

            update: function(){
            },

            actionOnClick: function(){
                game.state.start('room3');
            },
        };

        var room3State = {
            preload: function(){
                game.load.spritesheet('fabio','assets/spritesheet.png',55,96);
                game.load.image('backgnd','assets/salon3.png');
                game.load.image('chairfront', 'assets/silla.png');
                game.load.image('chairback', 'assets/silla2.png');

                game.load.image('eylin','assets/eyin.png');
                game.load.image('ifig','assets/ifi.png');
                game.load.image('ronel','assets/ronel.png');
                game.load.image('fab','assets/fabio.png');
                game.load.image('mafe','assets/mafe.png');
                game.load.image('smart','assets/smart.png');
                game.load.image('sco','assets/yo.png');
                game.load.image('ysa','assets/ysa.png');
            },

            create: function(){
                game.stage.backgroundColor = '#182d3b';
                game.add.sprite(0,0,'backgnd');

                leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
                rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
                upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
                downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
                spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

                chairs = game.add.group();
                chairs.enableBody = true;

                desks = game.add.group();
                desks.enableBody = true;

                cfab = chairs.create(30, game.world.height/6 - 22, 'chairfront');
                cfab.body.immovable = true;
                var dfab = desks.create(0, game.world.height/6 - 2, 'fab');
                dfab.body.immovable = true;

                var csmart = chairs.create(30, game.world.height/6 + 91, 'chairback');
                csmart.body.immovable = true;
                var dsmart = desks.create(0, game.world.height/6 + 52, 'smart');
                dsmart.body.immovable = true;

                var cey = chairs.create(30, game.world.height - 276, 'chairback');
                cey.body.immovable = true;
                var dey = desks.create(0, game.world.height - 315, 'eylin');
                dey.body.immovable = true;

                var csco = chairs.create(30, game.world.height - 115, 'chairback');
                csco.body.immovable = true;
                var dsco = desks.create(0, game.world.height - 153, 'sco');
                dsco.body.immovable = true;

                var cysa = chairs.create(game.world.width - 89, game.world.height/6 - 22, 'chairfront');
                cysa.body.immovable = true;
                var dysa = desks.create(game.world.width - 120, game.world.height/6 - 2, 'ysa');
                dysa.body.immovable = true;

                var cmafe = chairs.create(game.world.width - 89, game.world.height/6 + 91, 'chairback');
                cmafe.body.immovable = true;
                var dmafe = desks.create(game.world.width - 120, game.world.height/6 + 52, 'mafe');
                dmafe.body.immovable = true;

                var cifig = chairs.create(game.world.width - 89, game.world.height - 276, 'chairback');
                cifig.body.immovable = true;
                var difig = desks.create(game.world.width - 120, game.world.height - 315, 'ifig');
                difig.body.immovable = true;

                var cronel = chairs.create(game.world.width - 89, game.world.height - 115, 'chairback');
                cronel.body.immovable = true;
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

                //cursors = game.input.keyboard.createCursorKeys();
            },

            update: function(){
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;

                if (leftKey.isDown) {
                    player.body.velocity.x = -190;

                    player.animations.play('left');
                }
                else if (rightKey.isDown) {
                    player.body.velocity.x = 190;

                    player.animations.play('right');
                }
                else if (upKey.isDown) {
                    player.body.velocity.y = -190;

                    player.animations.play('up');
                }
                else if (downKey.isDown) {
                    player.body.velocity.y = 190;

                    player.animations.play('down');
                }
                else if(spaceKey.isDown && checkOverlap()){
                    console.log('action');
                }
                else{
                    player.animations.stop();
                    player.frame = 0;
                }

                var hitDesks = game.physics.arcade.collide(player, desks);
            },

            render: function(){
                //game.debug.geom(rect, '#0fffff');
            },

            checkOverlap: function(){
                var boundsA = player.getBounds();
                var boundsB = cfab.getBounds();

                return Phaser.Rectangle.intersects(boundsA,boundsB);
            },
        };
            
        var game = new Phaser.Game(410, 630, Phaser.AUTO, 'phaser');

        game.state.add('room3', room3State);
        game.state.add('menu', menu);
        game.state.start('menu');
    },

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        app.iniciaJuego();
    }, false);
}
