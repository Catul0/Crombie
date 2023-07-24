type tipoDeHamburguesa = "Carne" | "pollo"| "Vegetariana";

type Hamburguesa={
    name:string,
    precio:number,
    tipo:tipoDeHamburguesa
};
const hamburguesa1:Hamburguesa={
    name:"SuprimeBacon",
    precio:2023,
    tipo:"Carne"
}

console.log(hamburguesa1)
