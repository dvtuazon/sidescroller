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