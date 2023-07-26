type persona={
    nombre: string;
    edad:number;
}
type alumno = persona&{
    materiaSacadas:number;
    promedio:number;
}

const ejemplo:alumno={
    nombre:"asdasd",
    edad:123,
    materiaSacadas:123,
    promedio:8,
}

interface Point{
    x:number;
    y:number;
    z?:number;
}

const puntoRequerido: Required<Point>={ //required hacer que todos los items sean requeridos por mas que sean opcionales
    x:1,
    y:2,
    z:3,
}

const puntoParcial: Partial<Point>={ //partial hace que no sea necesario poner todos los parametros
    x:1,
}

const puntoPick: Pick<Point,"x" | "z">={ //pick hace que solamente el que vos le digas te pida
    x:1,
    z:2,
}
const puntoOmit: Omit<Point, "x"> ={ //me obliga a no poner X
    y:1,
}

const punt:Readonly<Point>={ //readOnly no deja que despues de declarado no se puede cambiar
    x:1,
    y:2,
    z:3,
}
type ejemploDinamico<T>={
    descripcion:T;
}
const ejemploDinamic:ejemploDinamico<string>={
    descripcion:"esto yiene que ser string",
}

type Merge<UNO,DOS>= UNO & DOS;
type mergeado=Merge<persona,ejemploDinamico<string>>
const ejemploMergead:mergeado={
    nombre:"valentin",
    edad:24,
    descripcion:"esto es el ejemplo dinamico string",
}
