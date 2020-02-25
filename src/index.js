
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix === undefined || matrix.length === 0) return [];
    else { 
      for(let i = 1; i < matrix.length; i += 2)
      {
        matrix[i].reverse();
      }
      for(let i in matrix) {
        for(let j in matrix[i]){
           result.push(matrix[i][j]);
        }
      }
      return result;
    }
  }

