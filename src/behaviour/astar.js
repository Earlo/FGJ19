function astar(s, e){

    open = []
    close = []

    g_score = {}
    f_score = {}
    came_from = {}

    g_score[s] = 0
    f_score[s] = cost(s, e)
    came_from[s.id] = null

    open.push(s)
    

    while (open){
        current = open[0]
        if (current == e){
            current = current.id
            path = [current]
            while (came_from[current] !== null){
                current = came_from[current]
                path.push(current)    
            }
            return path
        }
        close.push(current.id)
        open.splice(open.indexOf(current), 1);

        Object.keys(current.neighbours).map(function(objectKey, index) {
            let tile = current.neighbours[objectKey];
            if(tile.isOpen && close.indexOf(tile.id) == -1){
                test_g_score = g_score[current] + cost(tile, current)
                if(open.indexOf(tile.id) == -1 || test_g_score < g_score[tile]){
                    came_from[tile.id] = current.id
                    g_score[tile] = test_g_score
                    f_score[tile] = g_score[tile] + cost(e, tile)
                    open.push(tile)
                }
            }
        })
        open.sort(cost)
        
    }
};

function cost(a, b) {
    var w = a.x - b.x;
    var h = a.y - b.y;
    return Math.sqrt( w*w + h*h );
}
