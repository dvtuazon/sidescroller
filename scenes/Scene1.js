class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene1" });
    }

    preload() {
        this.load.image('platformTiles', '../assets/Tiles/platforms/platforms.png');
        this.load.image('bgTiles', '../assets/Tiles/background/cloudBg.png');
        this.load.image('goalTiles', '../assets/Tiles/bonfire/bonfire1.png');
        this.load.tilemapTiledJSON('level1', '../assets/Tiles/level1.json');
    }

    create() {
        this.map = this.add.tilemap('level1');
        const platformTileset = this.map.addTilesetImage('platforms', 'platformTiles');
        const bgTileset = this.map.addTilesetImage('cloudBg', 'bgTiles');
        const goalTileset = this.map.addTilesetImage('bonfire', 'goalTiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer', bgTileset);
        this.collisionLayer = this.map.createLayer('collisionLayer', platformTileset);
        this.goalLayer = this.map.createLayer('goalLayer', goalTileset);

    }
}