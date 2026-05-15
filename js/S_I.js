//recogemos datos - definimos variables.
let n1 = prompt("Digite un numero: ");
let n2 = prompt("Digite un segundo numero : ");

//convertimos los datos en numeros
let n1n = Number(n1);
let n2n = Number(n2);

let nf = (n1n + n2n);

//Implementamos validación.
if (isNaN(n1) || isNaN(n2)) {
    console.error("Error: Debe digitar un numero.");
} else {
    if (nf < 18){
        alert (`La suma de los numero es: ${nf}, por lo que es menor de 18.`);
    }
    else if(nf == 18) {
        alert(`La suma de los numeros es: ${nf}, es igual a 18!!!`)
    } else
        alert(`La suma de los numeros es : ${nf}, es mayor a 18!!!`)
}