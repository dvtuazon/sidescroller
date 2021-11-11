class Init extends Phaser.Scene {
    constructor() {
        super({ key: 'Init' });
    }

    preload() {
        this.load.image('tiles', 'assets/Tiles/Prison/Assets/tiles.png');
        this.load.tilemapTiledJSON('castle1', 'assets/Tiles/castle1.json');

        this.load.atlas('warrior', 'assets/Warrior/SpriteSheet/Warrior_Sheet-Effect.png', 
        '../assets/Warrior/warriorsprites.json');
    }

    create() {
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('warrior', { prefix: 'idle', end: 5, zeroPad: 4 }),
            repeat: -1
        });
    
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('warrior', { prefix: 'run', end: 7, zeroPad: 4 }),
            repeat: -1
        });
    
        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNames('warrior', { prefix: 'attack', end: 11, zeroPad: 4 }),
            repeat: 0
        });
    
        this.anims.create({
            key: 'hurt',
            frames: this.anims.generateFrameNames('warrior', { prefix: 'hurt', end: 3, zeroPad: 4 }),
            repeat: 0
        });
    
        this.anims.create({
            key: 'death',
            frames: this.anims.generateFrameNames('warrior', { prefix: 'death', end: 10, zeroPad: 4 }),
            repeat: 0
        });
    }
}