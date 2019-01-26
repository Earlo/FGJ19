function astar(s, e){

    let open = []
    let close = []

    let g_score = {}
    let f_score = {}
    let came_from = {}

    g_score[s.id] = 0
    f_score[s.id] = cost(s, e)
    came_from[s.id] = null

    open.push(s)
    

    while (open){
        current = open[0]
        if (current == e){
            current = current.id
            let path = []
            while (came_from[current] !== null){
                path.push(current)
                current = came_from[current]
            }
            return path
        }
        close.push(current.id)
        open.splice(open.indexOf(current), 1);

        Object.keys(current.neighbours).map(function(objectKey, index) {
            let tile = current.neighbours[objectKey];
            if(close.indexOf(tile.id) == -1){
                test_g_score = g_score[current.id] + cost(current, tile)
                if(tile.isOpen && open.indexOf(tile) == -1) {
                    open.push(tile)
                } 
                if( test_g_score < g_score[tile.id] || !(tile.id in g_score)){
                    came_from[tile.id] = current.id
                    g_score[tile.id] = test_g_score
                    f_score[tile.id] = g_score[tile.id] + cost(tile, e)
                }
            }
        })
        open.sort(function(a, b){
            return f_score[a.id] - f_score[b.id]
        })
    }
};

function cost(a, b) {
    var w = a.x - b.x;
    var h = a.y - b.y;
    return Math.sqrt( w*w + h*h );
}
