// setTimeout
console.log("Antes do setTimeout");

setTimeout(function () {
  console.log("Testando o setTimeout");
}, 2000); // Tempo em milesegundos.       1 segundo = 1000 milesegundos.

console.log("Depois do setTimeout");

// setInterval
setInterval(function () {
  console.log("Testando setInterval");
}, 1000);
