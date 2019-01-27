class Unit extends GraphicObject {
    constructor(tile) {
        super(tile.x, tile.y)
        this.tile = tile
        this.flag = null

        this.tile.occupy(this)
        this.draw()
        this.team = null

        this.behaviour = Steal
    }

    take(item) {
        item.pick(this)
    }

    drop() {
        this.flag.drop(this)
    }

    setTeam(team) {
        this.team = team
        this.changeColors(this.team.colors)
    }

    draw() {
        this.sprite.beginFill(this.colors[0])
        this.sprite.drawCircle(16 / 2, 16 / 2, 6)
    }

    act() {
        this.behaviour(this)
    }

    moveTo(tile){
        //console.log(this.tile.id,"->",tile.id,tile.isOpen)
        if (tile.isOpen){
            super.move(tile.x, tile.y)
            if (this.flag){
                this.flag.move(tile.x, tile.y)
            }
            tile.occupy(this)
            return true
        }
        return false
    }
}


class UnitHandler {
    constructor() {
        this.units = []
    }

    addUnit(unit) {
        this.units.push(unit)
    }

    act() {
        //TODO add priority queue
        this.units.forEach(function(unit) {
            unit.act();
        })
    }
}