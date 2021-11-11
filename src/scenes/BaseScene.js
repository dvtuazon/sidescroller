class BaseScene extends Phaser.Scene {
    constructor(key) {
        super({ key });
        this.key = key;
    }

    init() {
        this.scene.setVisible(false, this.key);
        this.prevSceneKey = this.key;
        this.nextSceneKey = null;
        this.transition = true;
        this.input.keyboard.removeAllListeners();
    }
    
    create(tilemap, tileset) {
        // controls
        this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        
        // tilemap
        this.map = this.make.tilemap(tilemap);
        this.tileset = this.map.addTilesetImage(tileset);

        this.backgroundLayer = this.map.createLayer('backgroundLayer', this.tileset);
        this.collisionLayer = this.map.createLayer('collisionLayer', this.tileset);
        this.goalLayer = this.map.createLayer('goalLayer', this.tileset);

        // player
        this.player = new Player({ scene: this, x: 100, y: 150 });
        
        // this.collisionLayer.setCollisionByExclusion([-1]);
        // this.physics.add.collider(this.player, this.collisionLayer);
    }

    update() {
        // if (this.transition === false) {
            if (this.keyLeft.isDown) {
                console.log('left');
                this.player.left();
            } else if (this.keyRight.isDown) {
                console.log('right');
                this.player.right();
            } else if (this.keyUp.isDown) {
                console.log('up');
                this.player.jump();
            } else if (this.keyDown.isDown) {
                console.log('down');
                this.player.crouch();
            }
        // }
    }

    onChangeScene() {
        this.transition = true;
        this.player.stop();
    }

    changeScene() {
        this.scene.start(this.nextSceneKey, this.prevSceneKey);
    }
}