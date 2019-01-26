class Unit extends GraphicObject {
    constructor(tile) {
        super(tile.x, tile.y)
        this.tile = tile
        this.tile.occupy(this)
        this.draw()
        this.team = null
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
        //AI here
        let target = this.team.enemy.flag.tile
        let path = astar(this.tile, target)
        //console.log("Path from", this.tile.id, target.id, "is",path)
        //console.log(path[path.length -1], this.tile.id)
        if(path.length > 0){
            this.moveTo(this.team.arena.tiles[path[path.length -1]])
        }
        //random move
        //this.moveTo(_.sample(this.tile.neighbours))
    }

    moveTo(tile){
        //console.log(this.tile.id,"->",tile.id,tile.isOpen)
        if (tile.isOpen){
            super.move(tile.x, tile.y)
            tile.occupy(this)    
        }
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