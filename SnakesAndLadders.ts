function quickestPath(board:{ladders:[number,number][];snakes:[number,number][];}):number[]{
    let result : number[] = [];
    let grid : number = 1;
    
    for (let dice:number = 6 ; dice >= 1 ; dice--){
        console.log('grid : ' + grid)
        console.log('dice : ' + dice)
        console.log('grid + dice : '+(grid + dice))
        for (let i:number = 0 ; i < board.ladders.length ; i++){
            if (grid + dice == board.ladders[i][0]){
                console.log('got ladder : ' + board.ladders[i][0] + ' re dice')
                grid = board.ladders[i][1];
                result.push(dice)
                console.log(result)
                dice = 7;
                break;
            }else if (grid + dice != board.ladders[i][0] && i == board.ladders.length-1 && dice == 1){
                console.log('No Ladders')

                for (let dice2 = 6 ; dice2 >= 1; dice2--){
                    //check snakes
                    for (let j = 0 ; j <= board.snakes.length ; j++){
                        if (grid + dice2 != board.snakes[i][1]){
                            if (grid + dice2 < 100){
                                console.log('dice2 : ' + dice2)
                                grid = grid + dice2;
                                result.push(dice2)
                                dice2 = 0;
                                dice = 7;
                                break;
                            }else if (grid + dice2 > 100){
                                continue;
                            }else {
                                console.log('dice2 : ' + dice2)
                                grid = grid + dice2
                                result.push(dice2)
                                console.log('Finish')
                                break;
                            }
                        }
                    }
                }
            }
        }

    }

    return result
}
// Test cases
console.log(quickestPath({
    ladders: [ [3,39],[14, 35], [31, 70] ,[44,65], [47, 86], [63, 83], [71,93] ],
    snakes: [ [21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66] ]
    }))
