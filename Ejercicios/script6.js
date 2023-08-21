// Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes. El algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son menores de edad.

var Mayor=0;
var Menor=0;
for (var i=1; i<=10; i++){
    let Estudian=Number(prompt("Ingrese edad estudiande numero: "+i));
    Estudian >= 18 ? Mayor++ : Menor++;//<---if else simplificado;
}
alert(`Cantidad mayores edad: ${Mayor}`);
alert(`Cantidad menores edad: ${Menor}`);
