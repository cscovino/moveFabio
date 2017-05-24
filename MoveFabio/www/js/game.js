var app = {

    iniciaJuego: function(){

        var desks, chairs;
        var prevaux = -1;
        var move = true;
        var puntuacion = 100;
        var button;
        var cfab,cysa,csmart,cmafe,cey,cifig,csco,cronel;
        var ccarlos,ccdan,cjami,cmarie,cernesto,coscar,cnacho,cluisa;
        var cgian,cjessa,clis,cmairim,cmari,cmjordan,cnathy,cramon,cwil;
        var leftKey, rightKey, upKey, downKey, spaceKey;
        var value = Math.floor((Math.random()*25)+1);
        console.log(value);
        var pos = {
            'cfab': 1,
            'cysa': 2,
            'csmart': 3,
            'cmafe': 4,
            'cey': 5,
            'cifig': 6,
            'csco': 7,
            'cronel': 8,
            'ccarlos': 9,
            'ccdan': 10,
            'cjami': 11,
            'cmarie': 12,
            'cernesto': 13,
            'coscar': 14,
            'cnacho': 15,
            'cluisa': 16,
            'cgian': 17,
            'cwil': 18,
            'clis': 19,
            'cmairim': 20,
            'cmari': 21,
            'cjessa': 22,
            'cmjordan': 23,
            'cramon': 24,
            'cnathy': 25
        };

        var menu = {
            preload: function(){
                game.load.spritesheet('button','assets/butsprite1.png',200,52);
                game.load.image('inicio','assets/inicio.png');
                
            },

            create: function(){
                game.stage.backgroundColor = '#182d3b';

                button = game.add.button(100,280,'button',menu.actionOnClick,this,1,0,1,0);
                game.add.sprite(105,110,'inicio');
            },

            update: function(){
            },

            actionOnClick: function(){
                game.state.start('hall');
            },
        };

        var hallState = {
            preload: function(){
                game.load.spritesheet('fabio','assets/spritesheet.png',55,96);
                game.load.spritesheet('r1','assets/backgrounds/sala1sprite.png',90,90);
                game.load.spritesheet('r2','assets/backgrounds/sala2sprite.png',90,90);
                game.load.spritesheet('r3','assets/backgrounds/sala3sprite.png',90,90);
                game.load.image('backgnd','assets/backgrounds/pasillo.png');
                game.load.image('lights','assets/backgrounds/luzpasillo.png');
            },

            create: function(){
                game.stage.backgroundColor = '#182d3b';
                game.add.sprite(0,0,'backgnd');

                leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
                rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
                upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
                downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
                spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

                r1 = game.add.sprite(315,55,'r1');
                r1.animations.add('spawn');
                r1.animations.play('spawn',5,true);

                r2 = game.add.sprite(315,255,'r2');
                r2.animations.add('spawn');
                r2.animations.play('spawn',5,true);

                r3 = game.add.sprite(315,455,'r3');
                r3.animations.add('spawn');
                r3.animations.play('spawn',5,true);

                player = game.add.sprite(0,0,'fabio',4);
                player.animations.add('down',[0,1,2,3],10,true);
                player.animations.add('up',[4,5,6,7],10,true);
                player.animations.add('right',[8,9,10,11],10,true);
                player.animations.add('left',[12,13,14,15],10,true);
                game.physics.arcade.enable(player);
                player.body.collideWorldBounds = true;

                game.add.sprite(0,0,'lights');
                scoreText = game.add.text(16,600,'Score: '+puntuacion, {fontSize:'20px', fill:'#000000'});
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
                else if(spaceKey.isDown){
                    roomSelect = hallState.checkOverlap();
                    switch(roomSelect){
                        case 1:
                            game.state.start('room1');
                            break;
                        case 2:
                            game.state.start('room2');
                            break;
                        case 3:
                            game.state.start('room3');
                            break;
                        default:
                            break;
                    }
                }
                else{
                    player.animations.stop();
                    player.frame = 0;
                }

                var hitDesks = game.physics.arcade.collide(player, desks);
            },

            checkOverlap: function(){
                var boundsA = player.getBounds();
                var boundsB = r1.getBounds();
                var boundsC = r2.getBounds();
                var boundsD = r3.getBounds();

                if (Phaser.Rectangle.intersects(boundsA,boundsB)) {
                    return 1;
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsC)) {
                    return 2;
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsD)) {
                    return 3;
                }

                return 0
            },
        };

        var room3State = {
            preload: function(){
                game.load.spritesheet('fabio','assets/spritesheet.png',55,96);
                game.load.spritesheet('fabiolose','assets/crysprite.png',75,96);
                game.load.spritesheet('fabiowin','assets/celebsprite.png',60,96);
                game.load.spritesheet('back','assets/backgrounds/passprite.png',45,45);
                game.load.image('backgnd','assets/backgrounds/salon3.png');
                game.load.image('chairfront', 'assets/silla.png');
                game.load.image('chairback', 'assets/silla2.png');

                game.load.image('eylin','assets/room3/eyin.png');
                game.load.image('ifig','assets/room3/ifi.png');
                game.load.image('ronel','assets/room3/ronel.png');
                game.load.image('fab','assets/room3/fabio.png');
                game.load.image('mafe','assets/room3/mafe.png');
                game.load.image('smart','assets/room3/smart.png');
                game.load.image('sco','assets/room3/yo.png');
                game.load.image('ysa','assets/room3/ysa.png');
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

                csmart = chairs.create(30, game.world.height/6 + 91, 'chairback');
                csmart.body.immovable = true;
                var dsmart = desks.create(0, game.world.height/6 + 52, 'smart');
                dsmart.body.immovable = true;

                cey = chairs.create(30, game.world.height - 276, 'chairback');
                cey.body.immovable = true;
                var dey = desks.create(0, game.world.height - 315, 'eylin');
                dey.body.immovable = true;

                csco = chairs.create(30, game.world.height - 115, 'chairback');
                csco.body.immovable = true;
                var dsco = desks.create(0, game.world.height - 153, 'sco');
                dsco.body.immovable = true;

                cysa = chairs.create(game.world.width - 89, game.world.height/6 - 22, 'chairfront');
                cysa.body.immovable = true;
                var dysa = desks.create(game.world.width - 120, game.world.height/6 - 2, 'ysa');
                dysa.body.immovable = true;

                cmafe = chairs.create(game.world.width - 89, game.world.height/6 + 91, 'chairback');
                cmafe.body.immovable = true;
                var dmafe = desks.create(game.world.width - 120, game.world.height/6 + 52, 'mafe');
                dmafe.body.immovable = true;

                cifig = chairs.create(game.world.width - 89, game.world.height - 276, 'chairback');
                cifig.body.immovable = true;
                var difig = desks.create(game.world.width - 120, game.world.height - 315, 'ifig');
                difig.body.immovable = true;

                cronel = chairs.create(game.world.width - 89, game.world.height - 115, 'chairback');
                cronel.body.immovable = true;
                var dronel = desks.create(game.world.width - 120, game.world.height - 153, 'ronel');
                dronel.body.immovable = true;

                back = game.add.sprite(game.world.width/2 - 20,game.world.height - 55,'back');
                back.animations.add('spawn');
                back.animations.play('spawn',5,true);

                player = game.add.sprite(game.world.width/2 - 20,game.world.height,'fabio',4);
                player.animations.add('down',[0,1,2,3],10,true);
                player.animations.add('up',[4,5,6,7],10,true);
                player.animations.add('right',[8,9,10,11],10,true);
                player.animations.add('left',[12,13,14,15],10,true);
                game.physics.arcade.enable(player);
                player.body.collideWorldBounds = true;

                scoreText = game.add.text(16,600,'Score: '+puntuacion, {fontSize:'20px', fill:'#000000'});
            },

            update: function(){
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;

                if (leftKey.isDown && move) {
                    player.body.velocity.x = -190;

                    player.animations.play('left');
                }
                else if (rightKey.isDown && move) {
                    player.body.velocity.x = 190;

                    player.animations.play('right');
                }
                else if (upKey.isDown && move) {
                    player.body.velocity.y = -190;

                    player.animations.play('up');
                }
                else if (downKey.isDown && move) {
                    player.body.velocity.y = 190;

                    player.animations.play('down');
                }
                else if(spaceKey.isDown && move){
                    var aux = room3State.checkOverlap();
                    if (aux === value) {
                        console.log('WIN!');
                        playerx = player.getBounds().x;
                        playery = player.getBounds().y;
                        player.kill();
                        celeb = game.add.sprite(playerx-5,playery,'fabiowin');
                        anim = celeb.animations.add('win');
                        celeb.animations.play('win',8,false);
                        move = false;
                    }
                    else if (aux === 30) {
                        game.state.start('hall');
                    }
                    else if (aux > 0 && aux !== prevaux) {
                        puntuacion -= 4;
                        scoreText.text = 'Score: '+puntuacion;
                        playerx = player.getBounds().x;
                        playery = player.getBounds().y;
                        player.kill();
                        crying = game.add.sprite(playerx-10,playery,'fabiolose');
                        anim = crying.animations.add('loose');
                        crying.animations.play('loose',8,false,true);
                        move = false;
                        anim.onComplete.add(room3State.createPlayer, this);
                    }
                    prevaux = aux;
                }
                else{
                    player.animations.stop();
                    player.frame = 0;
                }

                var hitDesks = game.physics.arcade.collide(player, desks);
            },

            checkOverlap: function(){
                var boundsA = player.getBounds();
                var boundsB = back.getBounds();
                var boundsC = cfab.getBounds();
                var boundsD = cysa.getBounds();
                var boundsE = csmart.getBounds();
                var boundsF = cmafe.getBounds();
                var boundsG = cey.getBounds();
                var boundsH = cifig.getBounds();
                var boundsI = csco.getBounds();
                var boundsJ = cronel.getBounds();

                if (Phaser.Rectangle.intersects(boundsA,boundsB)) {
                    return 30;
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsC)) {
                    return pos['cfab'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsD)) {
                    return pos['cysa'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsE)) {
                    return pos['csmart'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsF)) {
                    return pos['cmafe'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsG)) {
                    return pos['cey'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsH)) {
                    return pos['cifig'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsI)) {
                    return pos['csco'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsJ)) {
                    return pos['cronel']
                }

                return 0;
            },

            createPlayer: function(){
                player = game.add.sprite(playerx,playery,'fabio',4);
                player.animations.add('down',[0,1,2,3],10,true);
                player.animations.add('up',[4,5,6,7],10,true);
                player.animations.add('right',[8,9,10,11],10,true);
                player.animations.add('left',[12,13,14,15],10,true);
                game.physics.arcade.enable(player);
                player.body.collideWorldBounds = true;
                move = true;
            },
        };

        var room2State = {
            preload: function(){
                game.load.spritesheet('fabio','assets/spritesheet.png',55,96);
                game.load.spritesheet('fabiolose','assets/crysprite.png',75,96);
                game.load.spritesheet('fabiowin','assets/celebsprite.png',60,96);
                game.load.spritesheet('back','assets/backgrounds/passprite.png',45,45);
                game.load.image('backgnd','assets/backgrounds/salon2.png');
                game.load.image('chairfront', 'assets/silla.png');
                game.load.image('chairback', 'assets/silla2.png');

                game.load.image('carlos','assets/room2/carlos.png');
                game.load.image('cdan','assets/room2/cdan.png');
                game.load.image('ernesto','assets/room2/ernesto.png');
                game.load.image('jami','assets/room2/jami.png');
                game.load.image('luisa','assets/room2/luisa.png');
                game.load.image('marie','assets/room2/marie.png');
                game.load.image('nacho','assets/room2/nacho.png');
                game.load.image('oscar','assets/room2/oscar.png');
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

                ccarlos = chairs.create(30, game.world.height/6 - 4, 'chairfront');
                ccarlos.body.immovable = true;
                var dcarlos = desks.create(0, game.world.height/6 + 16, 'carlos');
                dcarlos.body.immovable = true;

                cjami = chairs.create(30, game.world.height/6 + 109, 'chairback');
                cjami.body.immovable = true;
                var djami = desks.create(0, game.world.height/6 + 70, 'jami');
                djami.body.immovable = true;

                cernesto = chairs.create(30, game.world.height - 256, 'chairfront');
                cernesto.body.immovable = true;
                var dernesto = desks.create(0, game.world.height - 235, 'ernesto');
                dernesto.body.immovable = true;

                cnacho = chairs.create(30, game.world.height - 142, 'chairback');
                cnacho.body.immovable = true;
                var dnacho = desks.create(0, game.world.height - 181, 'nacho');
                dnacho.body.immovable = true;

                ccdan = chairs.create(game.world.width - 89, game.world.height/6 - 4, 'chairfront');
                ccdan.body.immovable = true;
                var dcdan = desks.create(game.world.width - 120, game.world.height/6 + 16, 'cdan');
                dcdan.body.immovable = true;

                cmarie = chairs.create(game.world.width - 89, game.world.height/6 + 109, 'chairback');
                cmarie.body.immovable = true;
                var dmarie = desks.create(game.world.width - 120, game.world.height/6 + 70, 'marie');
                dmarie.body.immovable = true;

                coscar = chairs.create(game.world.width - 89, game.world.height - 256, 'chairfront');
                coscar.body.immovable = true;
                var doscar = desks.create(game.world.width - 120, game.world.height - 235, 'oscar');
                doscar.body.immovable = true;

                cluisa = chairs.create(game.world.width - 89, game.world.height - 142, 'chairback');
                cluisa.body.immovable = true;
                var dluisa = desks.create(game.world.width - 120, game.world.height - 181, 'luisa');
                dluisa.body.immovable = true;

                back = game.add.sprite(game.world.width/2 - 20,game.world.height - 55,'back');
                back.animations.add('spawn');
                back.animations.play('spawn',5,true);

                player = game.add.sprite(game.world.width/2 - 20,game.world.height,'fabio',4);
                player.animations.add('down',[0,1,2,3],10,true);
                player.animations.add('up',[4,5,6,7],10,true);
                player.animations.add('right',[8,9,10,11],10,true);
                player.animations.add('left',[12,13,14,15],10,true);
                game.physics.arcade.enable(player);
                player.body.collideWorldBounds = true;

                scoreText = game.add.text(16,600,'Score: '+puntuacion, {fontSize:'20px', fill:'#000000'});
            },

            update: function(){
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;

                if (leftKey.isDown && move) {
                    player.body.velocity.x = -190;

                    player.animations.play('left');
                }
                else if (rightKey.isDown && move) {
                    player.body.velocity.x = 190;

                    player.animations.play('right');
                }
                else if (upKey.isDown && move) {
                    player.body.velocity.y = -190;

                    player.animations.play('up');
                }
                else if (downKey.isDown && move) {
                    player.body.velocity.y = 190;

                    player.animations.play('down');
                }
                else if(spaceKey.isDown && move){
                    var aux = room2State.checkOverlap();
                    if (aux === value) {
                        console.log('WIN!');
                        playerx = player.getBounds().x;
                        playery = player.getBounds().y;
                        player.kill();
                        celeb = game.add.sprite(playerx-5,playery,'fabiowin');
                        anim = celeb.animations.add('win');
                        celeb.animations.play('win',8,false);
                        move = false;
                    }
                    else if (aux === 30) {
                        game.state.start('hall');
                    }
                    else if (aux > 0 && aux !== prevaux) {
                        puntuacion -= 4;
                        scoreText.text = 'Score: '+puntuacion;
                        playerx = player.getBounds().x;
                        playery = player.getBounds().y;
                        player.kill();
                        crying = game.add.sprite(playerx-10,playery,'fabiolose');
                        anim = crying.animations.add('loose');
                        crying.animations.play('loose',8,false,true);
                        move = false;
                        anim.onComplete.add(room2State.createPlayer, this);
                    }
                    prevaux = aux;
                }
                else{
                    player.animations.stop();
                    player.frame = 0;
                }

                var hitDesks = game.physics.arcade.collide(player, desks);
            },

            checkOverlap: function(){
                var boundsA = player.getBounds();
                var boundsB = back.getBounds();
                var boundsC = ccarlos.getBounds();
                var boundsD = ccdan.getBounds();
                var boundsE = cjami.getBounds();
                var boundsF = cmarie.getBounds();
                var boundsG = cernesto.getBounds();
                var boundsH = coscar.getBounds();
                var boundsI = cnacho.getBounds();
                var boundsJ = cluisa.getBounds();

                if (Phaser.Rectangle.intersects(boundsA,boundsB)) {
                    return 30;
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsC)) {
                    return pos['ccarlos'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsD)) {
                    return pos['ccdan'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsE)) {
                    return pos['cjami'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsF)) {
                    return pos['cmarie'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsG)) {
                    return pos['cernesto'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsH)) {
                    return pos['coscar'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsI)) {
                    return pos['cnacho'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsJ)) {
                    return pos['cluisa']
                }

                return 0;
            },

            createPlayer: function(){
                player = game.add.sprite(playerx,playery,'fabio',4);
                player.animations.add('down',[0,1,2,3],10,true);
                player.animations.add('up',[4,5,6,7],10,true);
                player.animations.add('right',[8,9,10,11],10,true);
                player.animations.add('left',[12,13,14,15],10,true);
                game.physics.arcade.enable(player);
                player.body.collideWorldBounds = true;
                move = true;
            },
        };

        var room1State = {
            preload: function(){
                game.load.spritesheet('fabio','assets/spritesheet.png',55,96);
                game.load.spritesheet('fabiolose','assets/crysprite.png',75,96);
                game.load.spritesheet('fabiowin','assets/celebsprite.png',60,96);
                game.load.spritesheet('back','assets/backgrounds/passprite.png',45,45);
                game.load.image('backgnd','assets/backgrounds/salon1.png');
                game.load.image('chairfront', 'assets/silla.png');
                game.load.image('chairback', 'assets/silla2.png');

                game.load.image('gian','assets/room1/gian.png');
                game.load.image('jessa','assets/room1/jessa.png');
                game.load.image('lis','assets/room1/lis.png');
                game.load.image('mairim','assets/room1/mairim.png');
                game.load.image('mari','assets/room1/mari.png');
                game.load.image('mjordan','assets/room1/mjordan.png');
                game.load.image('nathy','assets/room1/nathy.png');
                game.load.image('ramon','assets/room1/ramon.png');
                game.load.image('wil','assets/room1/wil.png');
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

                cgian = chairs.create(30, game.world.height/6 + 6, 'chairfront');
                cgian.body.immovable = true;
                var dgian = desks.create(0, game.world.height/6 + 26, 'gian');
                dgian.body.immovable = true;

                cwil = chairs.create(180, game.world.height/6 - 85, 'chairfront');
                cwil.body.immovable = true;
                var dwil = game.add.sprite(150, game.world.height/6 - 65, 'wil');

                cmairim = chairs.create(30, game.world.height/6 + 119, 'chairback');
                cmairim.body.immovable = true;
                var dmairim = desks.create(0, game.world.height/6 + 80, 'mairim');
                dmairim.body.immovable = true;

                cjessa = chairs.create(30, game.world.height - 246, 'chairfront');
                cjessa.body.immovable = true;
                var djessa = desks.create(0, game.world.height - 225, 'jessa');
                djessa.body.immovable = true;

                cramon = chairs.create(30, game.world.height - 132, 'chairback');
                cramon.body.immovable = true;
                var dramon = desks.create(0, game.world.height - 171, 'ramon');
                dramon.body.immovable = true;

                clis = chairs.create(game.world.width - 89, game.world.height/6 + 6, 'chairfront');
                clis.body.immovable = true;
                var dlis = desks.create(game.world.width - 120, game.world.height/6 + 26, 'lis');
                dlis.body.immovable = true;

                cmari = chairs.create(game.world.width - 89, game.world.height/6 + 119, 'chairback');
                cmari.body.immovable = true;
                var dmari = desks.create(game.world.width - 120, game.world.height/6 + 80, 'mari');
                dmari.body.immovable = true;

                cmjordan = chairs.create(game.world.width - 89, game.world.height - 246, 'chairfront');
                cmjordan.body.immovable = true;
                var dmjordan = desks.create(game.world.width - 120, game.world.height - 225, 'mjordan');
                dmjordan.body.immovable = true;

                cnathy = chairs.create(game.world.width - 89, game.world.height - 132, 'chairback');
                cnathy.body.immovable = true;
                var dnathy = desks.create(game.world.width - 120, game.world.height - 171, 'nathy');
                dnathy.body.immovable = true;

                back = game.add.sprite(game.world.width/2 - 20,game.world.height - 55,'back');
                back.animations.add('spawn');
                back.animations.play('spawn',5,true);

                player = game.add.sprite(game.world.width/2 - 20,game.world.height,'fabio',4);
                player.animations.add('down',[0,1,2,3],10,true);
                player.animations.add('up',[4,5,6,7],10,true);
                player.animations.add('right',[8,9,10,11],10,true);
                player.animations.add('left',[12,13,14,15],10,true);
                game.physics.arcade.enable(player);
                player.body.collideWorldBounds = true;

                scoreText = game.add.text(16,600,'Score: '+puntuacion, {fontSize:'20px', fill:'#000000'});
            },

            update: function(){
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;

                if (leftKey.isDown && move) {
                    player.body.velocity.x = -190;

                    player.animations.play('left');
                }
                else if (rightKey.isDown && move) {
                    player.body.velocity.x = 190;

                    player.animations.play('right');
                }
                else if (upKey.isDown && move) {
                    player.body.velocity.y = -190;

                    player.animations.play('up');
                }
                else if (downKey.isDown && move) {
                    player.body.velocity.y = 190;

                    player.animations.play('down');
                }
                else if(spaceKey.isDown && move){
                    var aux = room1State.checkOverlap();
                    if (aux === value) {
                        console.log('WIN!');
                        playerx = player.getBounds().x;
                        playery = player.getBounds().y;
                        player.kill();
                        celeb = game.add.sprite(playerx-5,playery,'fabiowin');
                        anim = celeb.animations.add('win');
                        celeb.animations.play('win',8,false);
                        move = false;
                    }
                    else if (aux === 30) {
                        game.state.start('hall');
                    }
                    else if (aux > 0 && aux !== prevaux) {
                        puntuacion -= 4;
                        scoreText.text = 'Score: '+puntuacion;
                        playerx = player.getBounds().x;
                        playery = player.getBounds().y;
                        player.kill();
                        crying = game.add.sprite(playerx-10,playery,'fabiolose');
                        anim = crying.animations.add('loose');
                        crying.animations.play('loose',8,false,true);
                        move = false;
                        anim.onComplete.add(room1State.createPlayer, this);
                    }
                    prevaux = aux;
                }
                else{
                    player.animations.stop();
                    player.frame = 0;
                }

                var hitDesks = game.physics.arcade.collide(player, desks);
            },

            checkOverlap: function(){
                var boundsA = player.getBounds();
                var boundsB = back.getBounds();
                var boundsC = cgian.getBounds();
                var boundsD = clis.getBounds();
                var boundsE = cmairim.getBounds();
                var boundsF = cmari.getBounds();
                var boundsG = cjessa.getBounds();
                var boundsH = cmjordan.getBounds();
                var boundsI = cramon.getBounds();
                var boundsJ = cnathy.getBounds();
                var boundsK = cwil.getBounds();

                if (Phaser.Rectangle.intersects(boundsA,boundsB)) {
                    return 30;
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsC)) {
                    return pos['cgian'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsD)) {
                    return pos['clis'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsE)) {
                    return pos['cmairim'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsF)) {
                    return pos['cmari'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsG)) {
                    return pos['cjessa'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsH)) {
                    return pos['cmjordan'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsI)) {
                    return pos['cramon'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsJ)) {
                    return pos['cnathy'];
                }
                else if (Phaser.Rectangle.intersects(boundsA,boundsK)) {
                    return pos['cwil'];
                }

                return 0;
            },

            createPlayer: function(){
                player = game.add.sprite(playerx,playery,'fabio',4);
                player.animations.add('down',[0,1,2,3],10,true);
                player.animations.add('up',[4,5,6,7],10,true);
                player.animations.add('right',[8,9,10,11],10,true);
                player.animations.add('left',[12,13,14,15],10,true);
                game.physics.arcade.enable(player);
                player.body.collideWorldBounds = true;
                move = true;
            },
        };
            
        var game = new Phaser.Game(410, 630, Phaser.AUTO, 'phaser');

        game.state.add('room3', room3State);
        game.state.add('room2', room2State);
        game.state.add('room1', room1State);
        game.state.add('hall', hallState);
        game.state.add('menu', menu);
        game.state.start('menu');
    },

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        app.iniciaJuego();
    }, false);
}
