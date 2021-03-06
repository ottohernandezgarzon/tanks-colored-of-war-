    var Game = new Phaser.Game(900, 500, Phaser.AUTO, 'blockGame');
    var derecha, izquierda,arriba,abajo,cuerpo, disparo, tanque;
    var statusFirst = {   
        preload:()=> {
            // CARGA TODO LOS RECURSOS
            Game.stage.backgroundColor = "#0075ea";
            Game.scale.pageAlignHorizontally = true;
            Game.scale.pageAlignVertically = true;
        },
        create:()=>{
            // MOSTRAR EN PANTALLA 
        // cuerpo del tanque   
            canon=Game.add.graphics(0,393.5);
            canon.beginFill(0xc5c5c5c5);
            canon.lineStyle(10,0Xc0c0c0,2);
            canon.drawRect(60,0,130,20);
            canon.moveTo(60,0);
            canon.endFill();
            
            // cuerpo del tanque   
            cuerpo = Game.add.graphics(0,0);
            cuerpo.beginFill(0xc5c5c5);
            cuerpo.lineStyle(10,0Xc0c0c0,2);
            cuerpo.drawRect(40,380, 50,50);
            cuerpo.drawRect(1,430, 130,50);
            cuerpo.endFill();
            
            // mover el tanque
            derecha = Game.input.keyboard.createCursorKeys();   
            izquierda = Game.input.keyboard.createCursorKeys();
            arriba = Game.input.keyboard.createCursorKeys();
            abajo = Game.input.keyboard.createCursorKeys();
            // limites del cargo en canvas
            Game.physics.startSystem(Phaser.Physics.ARCADE);
            Game.physics.arcade.enable(cuerpo);
            Game.physics.arcade.enable(canon);
            canon.body.collideWorldBounds =true;
            // canon.anchor.setTo(1);
            
            cuerpo.body.collideWorldBounds =true;
           },
        update:()=>{
            // animación del juego;
           if (derecha.right.isDown) {canon.position.x +=3 ; cuerpo.position.x +=3;}
           if (izquierda.left.isDown) {canon.position.x -=3; cuerpo.position.x -=3;}
           if (arriba.up.isDown) canon.angle -= 1 && canon.angle >= -8.5  ;
           if (arriba.down.isDown) canon.angle +=1 && canon.angle <= 5.5;
        }
    }; 
Game.state.add('firths', statusFirst);
Game.state.start('firths');
