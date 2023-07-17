const saludar = (nombre)=> { //aca se crea la funcion flecha, se crea con una constante
    console.log("hola", nombre );
};
saludar("valentin");

const persona ={
    nombre:"valentin",
    edad:"24",
    saludar: function(){      //aca, para este metodo no se puede poner una funcion flecha, por que la funcion flecha no reconoce contexto
        console.log("hola me llamo ", this.nombre);
    }
};
persona.saludar();


//ejemplo de metodo con return implisito

// Return implicito
const persona3 = {
    nombre: "Juani",
    edad: 24,
    saludar: () => "Hola",
  };
  console.log(persona3.saludar());