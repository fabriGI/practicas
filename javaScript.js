//Escribe una función llamada ordenarPorEdad que reciba un arreglo de objetos, donde cada objeto representa a una persona y tiene las siguientes propiedades: nombre (string) y edad (número). La función debe ordenar el arreglo de personas según su edad de forma ascendente utilizando un callback para comparar las edades.
function ordenarPorEdad(personas){
    return personas.sort(function(a, b){
        return a.nombre - b.nombre;
    });
}

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Ana', edad: 35 }
];

console.log(ordenarPorEdad(personas));