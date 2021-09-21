let collisionLayer;
class BaseScene extends Phaser.Scene {
    constructor() {
        super({ key: "BaseScene" });
    }

    preload() {
        this.load.image('tiles', 'assets/Tiles/Prison/Assets/Assets.png');
        this.load.tilemapTiledJSON('castle1', 'assets/Tiles/castle1.json');
        this.load.atlas('warrior', 'assets/Warrior/SpriteSheet/Warrior_Sheet-Effect.png', 
        '../assets/Warrior/warriorsprites.json');
    }
    
    create() {
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        
        this.map = this.add.tilemap('castle1');
        const tileset = this.map.addTilesetImage('Assets', 'tiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer', tileset);
        collisionLayer = this.map.createLayer('collisionLayer', tileset);
        this.goalLayer = this.map.createLayer('goalLayer', tileset);
        collisionLayer.setCollisionByExclusion([-1]);

        player = new Player({ scene: this, x: 100, y: 100, sprite: 'warrior' });
        this.physics.add.collider(player, collisionLayer);
    }

    // update() {
    //     if (keyA.isDown) {
    //         player.setVelocityX(-100);
    //     } else if (keyD.isDown) {
    //         player.setVelocityX(100);
    //     } else {
    //         player.setVelocityX(0);
    //     }
    
    //     if (keyW.isDown) {
    //         player.setVelocityY(-100);
    //     } else if (keyS.isDown) {
    //         player.setVelocityX(0);
    //     }
    // }
}