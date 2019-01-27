class Flag extends GraphicObject {
    constructor(team, tile) {
        super(tile.x, tile.y)
        
        this.tile = tile
        this.tile.addItem(this)
        this.draw()

        this.carrier = null
        this.team = team
    }

    draw() {
        this.sprite.beginFill(this.colors[0])
        this.sprite.drawCircle(16 / 2, 16 / 2, 4)
    }

    pick(unit) {
        this.tile.removeItem(this)
        let s = this.tile
        this.tile = null
        this.carrier = unit
        unit.flag = this
        this.draw()
        s.draw()
    }

    drop(unit) {
        console.log("dpw")
        this.tile = unit.tile
        unit.flag = null
        this.carrier = null
        this.tile.addItem(this)
        this.move(this.tile.x, this.tile.y)
    }

    moveTo(tile){
        if (tile.isOpen){
            super.move(tile.x, tile.y)
            tile.occupy(this)    
        }
    }
}