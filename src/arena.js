class Arena{
    constructor(h, w) {
        this.size = 16;
        this.tiles = new Array(w);        ;
        for (var i = 0; i < this.tiles.length; i++) {
            this.tiles[i] = new Array(h);
        }
    }

    height() {
        return this.tiles.length;
    }

    width() {
        return this.tiles[0].length;
    }

    draw(app) {
        let arena_map = new PIXI.Container();
        for (var i = 0; i < this.width(); i++) {
            for (var j = 0; j < this.height(); j++) {
                let tile = new PIXI.Graphics();
                tile.lineStyle(1, 0xFFFF00, 1);
                tile.drawRect(i*this.size, j*this.size, this.size, this.size);
                tile.endFill();
                arena_map.addChild(tile);
            }
        }
        //Add projection here or something
        app.stage.addChild(arena_map);
    }
}