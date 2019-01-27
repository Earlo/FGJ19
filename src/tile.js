class Tile extends GraphicObject{
    constructor(x, y, id){
        super(x, y)
        this.draw()
        this.unit = null
        this.items = []
        this.neighbours = {}

        this.id = id
    }

    get isOpen() {
        return this.unit == null
    }

    get isWall() {
        return false
    }

    free() {
        if(this.unit){
            this.unit.tile = null
        }
        this.unit = null
    }

    occupy(unit) {
        unit.tile.free()
        unit.tile = this
        this.unit = unit
    }

    addItem(item) {
        this.items.push(item)
    }
    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1)
    }


    draw() {
        this.sprite.lineStyle(1, this.colors[0], 1)
        this.sprite.drawRect(0, 0, 16, 16)
    }

    display(target) {
        super.display(target)
        if (this.unit !== null){
            this.unit.display(target)
        }
        this.items.forEach(function(item) {
            item.display(target);
        })

    }
}