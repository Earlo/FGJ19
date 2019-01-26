class Tile extends GraphicObject{
    constructor(x, y){
        super(x, y);
        this.draw(0xFFFF00)
        this.occupied = null;
        this.neighbours = {};
    }

    free() {
        if(this.occupied){
            this.occupied.tile = null
        }
        this.occupied = null
    }

    occupy(unit) {
        unit.tile.free();
        unit.tile = this;
        this.occupied = unit;
    }

    draw(color) {
        this.sprite.lineStyle(1, color, 1);
        this.sprite.drawRect(0, 0, 16, 16);
    }

    display(target) {
        super.display(target);
        if (this.occupied !== null){
            this.occupied.display(target)
        }
    }
}