let cont=1000;
let aux=0;
let nom, nom2;
let notasMayores
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
        nombre: "Jose",
        nota: 10,
    },
    {
        nombre:"rodri",
        nota:10
    }
];
for(let i =0; i<3; i++){
    if(alumnos[i].nota<cont){
        cont=alumnos[i].nota;
        nom = alumnos[i].nombre
    }
    if(alumnos[i].nota>aux){
        aux=alumnos[i].nota;
        nom2 = alumnos[i].nombre
    }
    if(alumnos[i].nota=aux){
        notasMayores=alumnos[i];
    }
}
console.log("el alumno es ",nom, " y su nota es: ", cont);
coneole.log("los alumnos que tiene mayot nota son:")
notasMayores.forEach(alumno => {
    console.log(alumno.nombre," y su nota es: ",alumno.nota)
});

// let arreglo="LaCrOmbiNeTa"
// for(let i=0; i<arreglo.length;i++){
//     if(arreglo[i]== arreglo[i].toUpperCase()){
//         console.log(arreglo[i])
//     }
// };