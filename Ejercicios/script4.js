let cliente=prompt("Hola! Ingresa tú nombre");
let cantidad=Number(prompt("Ingresa cantidad de huevos"));

cantidad >=1 && cantidad<=100 ? alert(`${cliente} tu descuento sera del 3%`) : false; 
cantidad >=101 && cantidad<=200 ? alert(`${cliente} tu descuento sera del 5%`) : false; 
cantidad >=201 && cantidad<=300 ? alert(`${cliente} tu descuento sera del 8%`) : false; 
cantidad >=301 ? alert(`${cliente} tu descuento sera del 10%`) : false; 