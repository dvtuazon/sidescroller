let collisionLayer;
let w;
let h;
class BaseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BaseScene' });
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

        player = new Player({ scene: this, x: 100, y: 100, sprite: 'warrior' });
        w = player.width;
        h = player.height;
        // const cropRect = new Phaser.GameObjects.Rectangle(player.scene, 0, 0, 16, 32);
        player.setBodySize(16, 32);
        collisionLayer.setCollisionByExclusion([-1]);
        this.physics.add.collider(player, collisionLayer);
    }

    update() {
        if (keyA.isDown) {
            player.setVelocityX(-100);
        } else if (keyD.isDown) {
            player.setVelocityX(100);
        } else {
            player.setVelocityX(0);
        }
    
        if (keyW.isDown) {
            player.setVelocityY(-100);
        } else if (keyS.isDown) {
            player.setVelocityX(0);
        }

        // if (this.input.x < w && this.input.y < h)
        // {
        //     player.x = this.input.x;
        //     player.y = this.input.y;
        //     cropRect.x = this.input.x;
        //     cropRect.y = this.input.y;

        //     player.updateCrop();
        // }
    }
}