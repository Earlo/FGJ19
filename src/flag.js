class Flag extends GraphicObject {
    constructor(team, tile) {
        super(tile.x, tile.y)
        
        this.tile = tile
        this.tile.addItem(this)
        this.draw()

        this.carried = false
        this.team = team
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