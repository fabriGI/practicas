//Supongamos que estás construyendo un sistema para administrar una tienda de libros en línea. Necesitas escribir una función llamada calcularTotalVentas que reciba un arreglo de objetos, donde cada objeto representa un libro vendido y tiene las siguientes propiedades: titulo (string), precio (number) y cantidad (number). La función debe calcular el total de ventas sumando el precio total de cada libro vendido y devolver el resultado.

function calcularTotalVentas(librosVendidos){
    var dineroRecaudado = 0 ;
    for (i = 0 ; i < librosVendidos.length ; i++){
        var precio = librosVendidos[i].precio;
        var cantidadVentas = librosVendidos[i].cantidad;
        dineroRecaudado += precio * cantidadVentas; 
        
    }return dineroRecaudado;
}
var librosVendidos = [
    { titulo: 'El principito', precio: 10, cantidad: 5 },
    { titulo: 'Harry Potter y la piedra filosofal', precio: 15, cantidad: 8 },
    { titulo: 'Cien años de soledad', precio: 12, cantidad: 3 },
    { titulo: 'El señor de los anillos', precio: 20, cantidad: 6 },
    { titulo: '1984', precio: 18, cantidad: 2 },
    { titulo: 'Don Quijote de la Mancha', precio: 25, cantidad: 4 },
    { titulo: 'Orgullo y prejuicio', precio: 14, cantidad: 7 }
];

// Calculamos el total de ventas
var totalVentas = calcularTotalVentas(librosVendidos);

// Mostramos el resultado en la consola
console.log('El total de ventas es: $' + totalVentas);