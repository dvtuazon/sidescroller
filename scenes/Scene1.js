class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene1" });
    }

    preload() {
        this.load.image('platformTiles', '../assets/Tiles/platforms/platforms.png');
        this.load.image('bgTiles', '../assets/Tiles/background/cloudBg.png');
        this.load.image('goalTiles', '../assets/Tiles/bonfire/bonfire1.png');
        this.load.tilemapTiledJSON('level1', '../assets/Tiles/level1.json');
        this.load.atlas('warrior', '../assets/Warrior/SpriteSheet/Warrior_Sheet-Effect.png', 
        '../assets/Warrior/warriorsprites.json');
    }
    
    create() {
        this.map = this.add.tilemap('level1');
        const platformTileset = this.map.addTilesetImage('platforms', 'platformTiles');
        const bgTileset = this.map.addTilesetImage('cloudBg', 'bgTiles');
        const goalTileset = this.map.addTilesetImage('bonfire', 'goalTiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer', bgTileset);
        this.collisionLayer = this.map.createLayer('collisionLayer', platformTileset);
        this.goalLayer = this.map.createLayer('goalLayer', goalTileset);
        this.collisionLayer.setCollisionByExclusion([-1]);

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

        // const platforms = this.physics.add.staticGroup();
        // const addPlatform = (x, y, width) => {
        //     for (let i=0; i<width; i++) {
        //         platforms.create(x+(i*16), y, 'platformTiles')
        //     }
        // }

        // addPlatform(0, 450, 10);


        const warrior = this.physics.add.sprite(100, 200, 'warrior');
        this.physics.add.collider(warrior, this.collisionLayer);

        // this.input.keyboard.on('keyup_D', e => {
        //     this.map.x += 10;
        // }, this);

        // this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    }

    update() {
        const keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        const keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        const keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        const keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        if (keyA.isDown) {
            this.warrior.setVelocityX(-200);
        } else if (keyS.isDown) {
            console.log('S key pressed')
        } else if (keyD.isDown) {
            console.log('D key pressed')
        } else if (keyW.isDown) {
            console.log('W key pressed')
        }
    }
}