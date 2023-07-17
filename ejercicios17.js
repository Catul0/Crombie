let productos=[
    {
        inventario: 570,
        precio: 1000,
        marca: "coca-cola",
        nombre:"sprite"
    },
    {
        inventario: 55,
        precio: 70000,
        marca: "puma",
        nombre:"zapatilla"
    },
    {
        inventario: 100,
        precio: 100000,
        marca: "adidas",
        nombre:"botines"
    },
    {
        inventario: 120,
        precio: 80000,
        marca: "adidas",
        nombre:"campera"
    }
]

function marca(objeto,marca){
    let respuesta=[]
    for(let i=0; i<objeto.length; i++){
        if(objeto[i].marca==marca){
            respuesta.push(objeto[i]);
        }
    }
    return respuesta;
}
function preciosMayores(precio,objeto){
    let respuesta=[]
    for(let i=0; i<objeto.length; i++){
        if(objeto[i].precio>precio){
        respuesta.push(objeto[i]);
    }
    }
    return respuesta;
}

function nameChange(objeto, marca,nuevaMarca){
    for(let i=0; i<objeto.length; i++){
        if(objeto[i].marca==marca){
            objeto[i].marca=nuevaMarca;
        }
    }
    return objeto;
}
function precios(objeto){
    let precios=[];
    let suma=0,contador=0,max=0,min=999999999999999999999999999999;
    for(let i=0; i<objeto.length; i++){
        precios.push(objeto[i].precio);
        suma+=objeto[i].precio;
        contador++;
        if(objeto[i].precio>max){
            max=objeto[i].precio;
        }
        if(objeto[i].precio<min){
            min=objeto[i].precio;
        }

    }
    console.log("El promedio de precios de los productos es: ",suma/contador);
    console.log("El precio maximo es: ",max);
    console.log("El precio minimo es: ",min);
    return precios;
}


console.log("todos los productos de la marca adidas: ",marca(productos,"adidas"));
console.log("todos los que el precio sea mayor a 50000",preciosMayores(50000,productos));
console.log("cambiode nombrede puma a adidas",nameChange(productos,"puma","adidas"));
console.log("precios",precios(productos))