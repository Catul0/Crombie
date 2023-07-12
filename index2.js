let cont=1000;
const alumnos=[
    {
        nombre:"valentin",
        nota:3
    },
    {
        nombre:"waldemar",
        nota:8
    },
    {
        nombre:"rodri",
        nota:10
    }
];
for(let i =0; i<3; i++){
    if(alumnos[i].nota<cont){
        cont=alumnos[i].nota;
    }
}
console.log(cont);