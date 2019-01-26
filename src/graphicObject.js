class GraphicObject {
    constructor(x, y){
        this.sprite = new PIXI.Graphics()
        this.colors = [0xFFFF00]
        this.move(x,y)
    }

    get coords() {
        return [this.x, this.y]
    }

    changeColors(colors) {
        this.colors = colors
        this.draw()
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
