// En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo que encuentre el promedio de edades de los estudiantes mayores de 21 años y el promedio de edades del resto de estudiantes. Por cada estudiante se tiene un registro que contiene su código y edad.
let May21=0;
let Men21=0
let N=prompt("Ingrese la cantidad de estudiantes")
let contMayor=0;
let contMenor=0;

for (let i = 1; i <=N ; i++){
   let codigo= prompt(`Ingrese el código del estudiante ${i}:`);
   let edad=Number(prompt("Ingresa edad"));
   edad>=21 ? May21 = May21 + edad : Men21 = Men21 + edad;
   edad>=21 ? contMayor++ : contMenor++; 
}
let promedioMayor=(May21/contMayor);
let promedioMenor=(Men21/contMenor);

alert(`Promedio mayores a 21 años es de: ${promedioMayor}`);
alert(`Promedio menores a 21 años es de: ${promedioMenor}`);

