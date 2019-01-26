class Unit extends GraphicObject{
    constructor(color, tile) {
        super(tile.x, tile.y);
        this.tile = tile
        this.tile.occupy(this)

        this.draw(color);
    }
    draw(color) {
        this.sprite.beginFill(color);
        this.sprite.drawCircle(16 / 2, 16 / 2, 6)
    }

    act() {
        console.log(_.sample, this.tile.neighbours)
        this.move_to(_.sample(this.tile.neighbours));
    }

    move_to(tile){
        //TODO if free
        super.move(tile.x, tile.y);
        console.log(tile)
        tile.occupy(this);
    }
}