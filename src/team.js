class Team {
    constructor(color) {
        this.members = []
        this.color = color
    }

    addMember(unit) {
        unit.color = this.color

        this.members.push(unit)
    }
}