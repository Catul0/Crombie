function solution(matrix) {
    let respuesta=[];
    let contador=0;
    let fila=[];
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            
            if(i-1 >= 0 && j-1 >=0 && matrix[i-1][j-1]==true ){
                contador++;
            }
            if( i-1 >= 0 &&matrix[i-1][j]==true ){
                contador++;
            }
            if( i-1 >= 0 && j+1< matrix[i].length && matrix[i-1][j+1]==true ){
                contador++;
            }
            if(  j-1 >=0 && matrix[i][j-1]==true ) {
                contador++;
            }
            if( j+1< matrix[i].length && matrix[i][j+1]==true ){
                contador++;
            }
            if( j-1 >=0 && i+1<matrix.length && matrix[i+1][j-1]==true ){
                contador++;
            }
            if( i+1<matrix.length &&  matrix[i+1][j]==true  ){
                contador++;
            }
            if( i+1<matrix.length && j+1< matrix[i].length && matrix[i+1][j+1]==true ){
                contador++;
            }
            fila.push(contador);
            contador=0;
        }
        respuesta.push(fila)
        fila=[];
    }

    return respuesta;
}
console.log(solution([[true,false,false,true], 
    [false,false,true,false], 
    [true,true,false,true]]))