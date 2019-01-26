class Unit extends GraphicObject{
    constructor(tile) {
        super(tile.x, tile.y)
        this.tile = tile
        this.tile.occupy(this)
        this.draw()
    }

    draw() {
        this.sprite.beginFill(this.colors[0])
        this.sprite.drawCircle(16 / 2, 16 / 2, 6)
    }

    act() {
        this.moveTo(_.sample(this.tile.neighbours))
    }

    moveTo(tile){
        //TODO if free
        super.move(tile.x, tile.y)
        tile.occupy(this)
    }
}