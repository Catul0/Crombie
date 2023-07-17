let x=[1,2,3,4,5];
function solution(a,inicio,fin){
    let contador =0;
    let divisor=0;
    for(let i =inicio-1; i<fin;i++){
        contador+=a[i];
        divisor++;
    }
    return (contador/divisor);
}
console.log(solution(x,2,3));