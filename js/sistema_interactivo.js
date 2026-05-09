// Pedimos el nombre al usuario
let nombreUsuario = prompt("Ingresa tu nombre:");

// Pedimos la edad al usuario
let edadUsuario = prompt("Ingresa tu edad:");

// Convertimos la edad a número
let edadNumero = Number(edadUsuario);

// Revisamos si realmente ingresó un número
if (isNaN(edadNumero)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else {

    // Si es menor de edad
    if (edadNumero < 18) {
        alert(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    } 
    
    // Si es mayor o igual a 18
    else {
        alert(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    }
}