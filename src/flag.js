class Flag extends GraphicObject {
    constructor(tile) {
        super(tile.x, tile.y)
        
        this.tile = tile
        console.log(tile)
        this.tile.addItem(this)
        this.draw()
    }

    draw() {
        this.sprite.beginFill(this.colors[0])
        this.sprite.drawCircle(16 / 2, 16 / 2, 4)
    }

    act() {
        //AI here
        this.moveTo(_.sample(this.tile.neighbours))
    }

    moveTo(tile){
        if (tile.isOpen){
            super.move(tile.x, tile.y)
            tile.occupy(this)    
        }
    }
}