let player;
let keyA;
let keyS;
let keyD;
let keyW;

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.sprite);
        config.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
    }
}

// function createPlayer(scene, x, y, sprite) {
//     player = new Player(scene, x, y, sprite);
//     player = scene.add.image(x, y, sprite);
//     player.setColliderWorldBounds(true);
//     player.setScale(.75);
//     return player;
// }

// function createEnemy(scene, x, y, sprite) {
    
// }