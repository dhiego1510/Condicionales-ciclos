// Hacer un algoritmo que calcule e imprima los números primos comprendidos entre 1 y 5000.
for (let i = 1; i < 5000; i++) {
  let cont = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0 && i % 1 === 0) {
      cont = cont + 1;
    }
  }
  if (cont === 2) {
    console.log(i + " Es número primo");
  }
}       