class Arena {
    constructor(w, h) {
        this.size = 16
        this.height = h
        this.width = w
        this.tiles = {}
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                let id = i + "-" + j
                this.tiles[id] = new Tile(i, j, id)
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
                        let id = i + "-" + j
                        let rid = rx + "-" + ry
                        this.tiles[id].neighbours[index] = this.tiles[rid] 
                    }
                    index += 1
                }
            }
        }
    }

    display(target) {
        let arena_map = new PIXI.Container()
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                let id = i + "-" + j

                this.tiles[id].display(arena_map)
            }
        }
        //Add projection here or something
        target.addChild(arena_map)
    }

}

