function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

let aluno = {
  nome: prompt("Nome do aluno:"),
  nota1: Number(prompt("Nota 1:")),
  nota2: Number(prompt("Nota 2:"))
};

aluno.media = calcularMedia(aluno.nota1, aluno.nota2);

if (aluno.media >= 6) {
  alert(`${aluno.nome} foi aprovado com média ${aluno.media}`);
} else {
  alert(`${aluno.nome} foi reprovado com média ${aluno.media}`);
}