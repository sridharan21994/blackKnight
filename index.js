const n = 10, x = 0, y = 3;

function findMoves(a, b, n) {

    if (a >= n || b >= n || a < 0 || b < 0) return [];

    const xMoves = [2, 1, -1, -2, -2, -1, 1, 2],
          yMoves = [1, 2, 2, 1, -1, -2, -2, -1],
          result = [];
    let x = -1, y = -1;

      for (let i = 0; i < 8; i++) {
        x = a + xMoves[i];
        y = b + yMoves[i];
        if (x>=0 && y>=0 && x<n && y<n) result.push([x,y]);
     }

     return result;
}

console.table(findMoves(x,y,n));