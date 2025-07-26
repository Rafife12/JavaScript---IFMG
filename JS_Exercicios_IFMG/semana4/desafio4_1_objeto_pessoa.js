let pessoa = {
  nome: prompt("Digite seu nome:"),
  idade: Number(prompt("Digite sua idade:")),
  apresentar: function() {
    return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
  }
};
alert(pessoa.apresentar());