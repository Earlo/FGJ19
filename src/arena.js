class Arena {
    constructor(w, h) {
        this.size = 16
        this.tiles = new Array(w)        
        for (var i = 0; i < this.tiles.length; i++) {
            this.tiles[i] = new Array(h)
            for (var j = 0; j < this.tiles[i].length; j++) {
                this.tiles[i][j] = new Tile(i, j)
            }
        }
        // ugly
        let connections = [
            [-1,-1],
            [-1, 0],
            [-1, 1],
            [ 0,-1],
            [ 0, 1],
            [ 1,-1],
            [ 1, 0],
            [ 1, 1]
        ]
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                let index = 0
                for (var c = 0; c < connections.length; c++) {
                    let rx = i + connections[c][0]
                    let ry = j + connections[c][1]
                    if (rx > -1 && ry > -1 && rx < this.width && ry < this.height){
                        this.tiles[i][j].neighbours[index] = this.tiles[rx][ry] 
                    }
                    index += 1
                }
            }
        }
    }

    get height() {
        return this.tiles[0].length
    }

    get width() {
        return this.tiles.length
    }

    display(target) {
        let arena_map = new PIXI.Container()
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                this.tiles[i][j].display(arena_map)
            }
        }
        //Add projection here or something
        target.addChild(arena_map)
    }
}

