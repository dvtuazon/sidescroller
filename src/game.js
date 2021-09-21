const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 240,
    zoom: 1.5,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: [ BaseScene ]
}

const game = new Phaser.Game(config);

// function preload() {
//     game.load.atlas('warrior', 'assets/Warrior/SpriteSheet/Warrior_Sheet-Effect.png', 
//         'assets/Warrior/warriorsprites.json');
// }

function create() {

    game.anims.create({
        key: 'idle',
        frames: game.anims.generateFrameNames('warrior', { prefix: 'idle', end: 6, zeroPad: 4 }),
        repeat: -1
    });

    game.anims.create({
        key: 'run',
        frames: game.anims.generateFrameNames('warrior', { prefix: 'run', end: 8, zeroPad: 4 }),
        repeat: -1
    });

    game.anims.create({
        key: 'attack',
        frames: game.anims.generateFrameNames('warrior', { prefix: 'attack', end: 12, zeroPad: 4 }),
        repeat: 0
    });

    game.anims.create({
        key: 'hurt',
        frames: game.anims.generateFrameNames('warrior', { prefix: 'hurt', end: 4, zeroPad: 4 }),
        repeat: 0
    });

    game.anims.create({
        key: 'death',
        frames: game.anims.generateFrameNames('warrior', { prefix: 'death', end: 11, zeroPad: 4 }),
        repeat: 0
    });

    
}

function update() {
    // if (keyA.isDown) {
    //     warrior.setVelocityX(-100);
    // } else if (keyD.isDown) {
    //     warrior.setVelocityX(100);
    // } else {
    //     warrior.setVelocityX(0);
    // }

    // if (keyW.isDown) {
    //     warrior.setVelocityY(-100);
    // } else if (keyS.isDown) {
    //     warrior.setVelocityX(0);
    // }
}