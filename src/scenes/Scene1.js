class Scene1 extends BaseScene {
    constructor() {
        super('Scene1');
    }

    init(data) {
        super.init(this.getPosition(data));
    }

    create() {
        super.create('castle1', 'tiles');
    }
    
}