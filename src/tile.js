class Tile extends GraphicObject{
    constructor(x, y){
        super(x, y)
        this.draw()
        this.unit = null
        this.items = []
        this.neighbours = {}
    }

    get isOpen() {
        return this.unit == null
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

    //TODO remove item

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