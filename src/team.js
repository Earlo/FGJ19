class Team {
    constructor(colors, unithandler) {
        this.members = []
        this.colors = colors
        this.unithandler = unithandler
    }

    addMember(unit) {
        unit.changeColors(this.colors)
        this.members.push(unit)
        this.unithandler.addUnit(unit)
    }
}