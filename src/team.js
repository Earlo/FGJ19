class Team {
    constructor(arena, colors, base, unithandler) {
        this.unithandler = unithandler
        this.base = base
        this.colors = colors
        this.arena = arena
        this.members = []
        this.enemy = null

        let i = _.sample(this.base)
        this.flag = new Flag(this, arena.tiles[i[0]+"-"+i[1]])
    }

    setEnemy(other) {
        this.enemy = other
    }
    addMember(unit) {
        unit.setTeam(this)
        this.members.push(unit)
        this.unithandler.addUnit(unit)
    }
}