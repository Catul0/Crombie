var sequence= [40, 50, 60, 10, 20, 30];
function solution(sequence) {   
    let contador=0, resultado=true;
    for(let i=0; i <sequence.length-1; i++){
        if(sequence[i]>sequence[i+1] ){
            contador++;
            sequence.splice(i,1);
            i--;
        }
    }
    let arreglo = sequence;
    arreglo = arreglo.sort();
    for(let i=0; i <arreglo.length-1; i++){
        if(arreglo[i]==arreglo[i+1] ){
            contador++;

        }
    }
    if(contador>1){
        resultado=false;
    }
    return resultado;
}
console.log(solution(sequence));
