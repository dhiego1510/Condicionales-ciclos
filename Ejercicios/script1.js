// Realizar  un  programa  en  el  que  el  usuario  introduzca  el  número  del  mes  (1  al 12)    y  se  muestra  al  final  si  ese  mes  es  de  30  o  31  días.
let NumMes = prompt("Ingrese numero de mes");

if (NumMes==1 || NumMes== 3 ||NumMes== 5 ||NumMes== 7 ||NumMes== 8 ||NumMes== 10 ||NumMes==12 ){
    alert("Mes es de 31 dias"); 
}
else if (NumMes == 4 || NumMes == 6 || NumMes == 9 || NumMes == 11) {
    alert("Mes es de 30 dias")
}
else alert("Mes es de 28 o 30 dias");
