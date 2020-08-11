function starOutGrid(grid) {

    xCoordinates = []
    yCoordinates = []

   for (let x = 0; x < grid.length; x++) {
       for (let y = 0; y < grid[x].length; y++) {
           if (grid[x][y] == "*") {
               yCoordinates.push(y)
               xCoordinates.push(x)
           }
        }   
   } 

    for (let y = 0; y < yCoordinates.length; y++) {
        for (let x = 0; x < grid.length; x++) {
               grid[x][yCoordinates[y]] = "*"
            }
        }   

    for (let x = 0; x < xCoordinates.length; x++) {
        grid[xCoordinates[x]] = ["*", "*", "*"]
        }   
    
return grid;

}

