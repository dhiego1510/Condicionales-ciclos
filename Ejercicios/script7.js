// Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar; nombre del producto y su precio, que al final me muestra cuanto es el subtotal (precio sin iva), cuánto es el iva del 19% y cuál es el total que debe pagar una persona.

let Subtotal = 0;
let NameArray = [];

for (let i = 1; i <= 3; i++) {
    //Se crea la variable "producto" para capturar el nombre del producto ingresado en cada iteración del ciclo; para lugo agregarlo al array.
    let producto = (prompt("Ingrese producto número: " + i));
    let precio = Number(prompt("Ingrese precio:"));

    Subtotal =Subtotal+precio; // Suma a"Subtotal" lo q hay en la cantidad de la variable 'Num' "precio"; 
    
    NameArray.push(producto);// El metodo push agrega lo que hay en la variable "producto" al final del array;
}
let iva = Number(Subtotal * 0.19);// Calcular el IVA (19% del subtotal)
let total =Subtotal + iva;
alert(`Nombres productos: ${NameArray}`);
alert(`Subtotal es: ${Subtotal}`);
alert(`Iva es: ${iva}`);
alert(`Total es: ${total}`);


