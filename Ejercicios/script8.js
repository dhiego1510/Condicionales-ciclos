// Se  desea  elaborar  un  algoritmo  que  determine  cuántas  personas  de  un  grupo tienen  hijos  y  cuántos  no  tienen,  además  se  desea  conocer  el  promedio  del  número de  hijos.


let total=Number(prompt("Cuantas personas hay en el grupo"));
let i=0;
let conHijos=0;
let sinHijos=0;

while(i < total){
   i++;
   let hijos=prompt("¿Tienes hijos?");
   hijos==="si" ? conHijos++ : sinHijos++;
   
}
promedioHijos=(conHijos/total)*100;

alert(`${conHijos} personas tienen hijos`);
alert(`${sinHijos} personas no tienen hijos`);
alert(`El promedio de hijos por el grupo de ${total} estudianes es de: ${promedioHijos}`);

