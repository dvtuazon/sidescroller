class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, 'warrior');
        config.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setBodySize(16, 32);
        this.setOffset(20, 11);
    }

    left() {
        this.anims.play('run');
        this.body.velocity.x = -20;
    }

    right() {
        this.anims.play('run');
        this.body.velocity.x = 20;
    }

    jump() {
        this.anims.play('jump');
        this.body.velocity.y = -32;
    }

    stop() {
        this.anims.play('idle');
        this.body.velocity.x = 0;
    }
}