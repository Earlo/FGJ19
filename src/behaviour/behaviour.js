function Steal(unit) {
    let target = unit.team.enemy.flag
    let path = astar(unit.tile, target.tile)
    if(path.length > 0){
        if(!unit.moveTo(unit.team.arena.tiles[path[path.length -1]])){
            //Other unit in the tile
            // do somehitng
        }
    }
    else if(path.length == 0){
        unit.take(target)
        unit.behaviour = TakeHome
    }
}

function TakeHome(unit) {
    let target = unit.team.baseTile
    let path = astar(unit.tile, target)
    if(path.length > 0){
        unit.moveTo(unit.team.arena.tiles[path[path.length -1]])
    }
    else if(path.length == 0){
        unit.drop()
        console.log("Won")
        unit.behaviour = Steal
    }
}

function Fight(unit) {
    let target = unit.team.closestEnemy(unit)
    let path = astar(unit.tile, target)
    if(path.length > 1){
        unit.moveTo(unit.team.arena.tiles[path[path.length -1]])
    }
    else if(path.length == 1){
        unit.Fight()
    }
}

function Defend(unit) {
    let target = unit.team.closestEnemyfromBase
    let path = astar(unit.tile, target)
    if(path.length > 1){
        unit.moveTo(unit.team.arena.tiles[path[path.length -1]])
    }
    else if(path.length == 1){
        unit.Fight()
    }
}

function Retive(unit) {
    let target = unit.team.flag.carrier.tile
    let path = astar(unit.tile, target)
    if(path.length > 1){
        unit.moveTo(unit.team.arena.tiles[path[path.length -1]])
    }
    else if(path.length == 1){
        unit.Fight()
    }
}