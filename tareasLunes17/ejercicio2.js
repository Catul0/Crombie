let x=[1,2,3,4,5];
function solution(array){
    let newArray=array;
    for(let i=0; i<array.length; i++){
        newArray[i]*=5;
    }
    return newArray;
}

console.log(solution(x));