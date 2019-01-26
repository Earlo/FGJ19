class Team {
    constructor(arena, colors, base, unithandler) {
        this.members = []
        this.base = base
        let i = _.sample(this.base)
        this.flat = new Flag(arena.tiles[i[0]][i[1]])
        this.colors = colors
        this.unithandler = unithandler
    }

    addMember(unit) {
        unit.changeColors(this.colors)
        this.members.push(unit)
        this.unithandler.addUnit(unit)
    }
}