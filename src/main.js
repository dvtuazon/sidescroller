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
    scene: [ Init, Scene1 ]
}

const game = new Phaser.Game(config);