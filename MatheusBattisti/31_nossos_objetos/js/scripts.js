let pessoa = {
  nome: "Matheus",
  idade: 29,
  falar: function () {
    console.log("Olá, tudo bem?");
  },
  soma: function (a, b) {
    return a + b;
  },
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(10, 15);

console.log(soma);
