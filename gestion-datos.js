

// TASK 1 - CREACIÓN DEL OBJETO DE PRODUCTOS

// Objeto que almacena varios productos
const productos = {
    producto1: {
        id: 1,
        nombre: "Laptop",
        precio: 2500
    },

    producto2: {
        id: 2,
        nombre: "Mouse",
        precio: 80
    },

    producto3: {
        id: 3,
        nombre: "Teclado",
        precio: 150
    }
};

// TASK 2 - USO DE SET

// Set con números repetidos
const numeros = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

// Mostrar Set original
console.log("Set original:");
console.log(numeros);

// Agregar nuevo número
numeros.add(10);

console.log("Set después de agregar 10:");
console.log(numeros);

// Verificar si existe un número
console.log("¿Existe el número 3?");
console.log(numeros.has(3));

// Eliminar un número
// numeros.delete(2);

console.log("Set después de eliminar 2:");
console.log(numeros);

// Recorrer el Set con for...of
console.log("Recorriendo el Set:");

for (const numero of numeros) {
    console.log(numero);
}


// TASK 3 - CREACIÓN DE MAP

// Map de categorías y productos
const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorios", "Mouse");
categorias.set("Periféricos", "Teclado");


// TASK 4 - ITERACIÓN DE ESTRUCTURAS

// Recorrer objeto con for...in
console.log("Recorriendo objeto productos:");

for (const clave in productos) {
    console.log(clave, productos[clave]);
}


// Recorrer Set con for...of
console.log("Recorriendo Set:");

for (const numero of numeros) {
    console.log(numero);
}


// Recorrer Map con forEach()
console.log("Recorriendo Map:");

categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});


// Uso de Object.keys()
console.log("Claves del objeto:");
console.log(Object.keys(productos));


// Uso de Object.values()
console.log("Valores del objeto:");
console.log(Object.values(productos)); 


// Uso de Object.entries()
console.log("Entradas del objeto:");
console.log(Object.entries(productos));


// TASK 5 - VALIDACIONES Y PRUEBAS

// Validar productos
console.log("Validación de productos:");

for (const clave in productos) {

    const producto = productos[clave];

    if (
        producto.id &&
        producto.nombre &&
        typeof producto.precio === "number"
    ) {

        console.log("Producto válido:");
        console.log(producto);

    } else {

        console.error("Producto inválido:");
        console.error(producto);
    }
}


// Mostrar lista completa de productos
console.log("Lista completa de productos:");
console.log(productos);


// Mostrar productos únicos del Set
console.log("Lista de números únicos:");
console.log(numeros);


// Mostrar categorías y productos
console.log("Categorías y productos:");

categorias.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});