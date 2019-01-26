class GraphicObject {
    constructor(x, y){
        this.sprite = new PIXI.Graphics();
        this.move(x,y)
    }

    move(x, y) {
        this.x = x
        this.y = y
        this.sprite.x = x*16
        this.sprite.y = y*16
    }

    display(target) {
        target.addChild(this.sprite)
    }
}
