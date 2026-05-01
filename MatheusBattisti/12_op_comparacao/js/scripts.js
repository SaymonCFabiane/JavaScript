var idade = 18;
var possuiCarro = 1; // No JS o 0 conta como flase e o 1 conta como true. E em alguns casos outros numeros tambem contam como true, mas somente acima de 1 e em casos MUITO especificos.

if (idade >= 18) {
  console.log("O usuário pode fazer a carteira");
}

if (idade <= 17) {
  console.log("O usuário não pode fazer a carteira");
}

if (possuiCarro == true) {
  console.log("O usuário ja pode andar de carro");
}

var nome = "Matheus";

if (nome == "Matheus") {
  console.log("Seu nome é Matheus");
}

if (nome != "Matheus") {
  console.log("Seu nome não é Matheus");
}
