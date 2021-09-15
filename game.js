const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 352,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [ Scene1 ]
}

const game = new Phaser.Game(config);

// function preload() {
//     game.load.atlas('warrior', 'assets/Warrior/Warrior_Sheet-Effect.png', 
//         'assets/Warrior/warriorsprites.json');
// }

// function create() {
//     let keyA;
//     let keyS;
//     let keyD;
//     let keyW;
//     keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
//     keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
//     keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
//     keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

//     this.anims.create({
//         key: 'idle',
//         frames: this.anims.generateFrameNames('warrior', { prefix: 'idle', end: 6, zeroPad: 4 }),
//         repeat: -1
//     });

//     this.anims.create({
//         key: 'run',
//         frames: this.anims.generateFrameNames('warrior', { prefix: 'run', end: 8, zeroPad: 4 }),
//         repeat: -1
//     });

//     this.anims.create({
//         key: 'attack',
//         frames: this.anims.generateFrameNames('warrior', { prefix: 'attack', end: 12, zeroPad: 4 }),
//         repeat: 0
//     });

//     this.anims.create({
//         key: 'hurt',
//         frames: this.anims.generateFrameNames('warrior', { prefix: 'hurt', end: 4, zeroPad: 4 }),
//         repeat: 0
//     });

//     this.anims.create({
//         key: 'death',
//         frames: this.anims.generateFrameNames('warrior', { prefix: 'death', end: 11, zeroPad: 4 }),
//         repeat: 0
//     });

//     this.physics.add.sprite(100, 200, 'warrior');
// }

// function update() {
//     if (keyA.isDown) {
//         console.log('A key pressed')
//      } else if (keyS.isDown) {
//         console.log('S key pressed')
//      } else if (keyD.isDown) {
//         console.log('D key pressed')
//      } else if (keyW.isDown) {
//         console.log('W key pressed')
//      }
// }