/*
Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não 
em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
  {
    name: "Eduardo",
    av1: 8,
    av2: 6,
  },
  {
    name: "Julia",
    av1: 5.2,
    av2: 6,
  },
  {
    name: "Abner",
    av1: 8.2,
    av2: 4.3,
  },
  {
    name: "Alisson",
    av1: 8.9,
    av2: 10,
  },
]

function calcStudentAverages(students) {
  let studentAverages = [];
  students.forEach(student => {
      let studentAverage = (student.av1 + student.av2) / 2;
      let success = studentAverage >= 7 ? "aprovado" : "reprovado";
      studentAverages.push({ name: student.name, average: studentAverage, success: success });
  });
  return studentAverages;
}

let studentAverages = calcStudentAverages(students);

studentAverages.forEach(student => {
  if (student.success === "aprovado") {
    console.log(`A média do(a) aluno(a) ${student.name} foi de ${student.average.toFixed(2)}pts. Parabéns ${student.name}! Você foi aprovado(a) no concurso.`);
  } else {
    console.log(`A média do(a) aluno(a) ${student.name} foi de ${student.average.toFixed(2)}pts. Não foi dessa vez ${student.name}. Tente novamente!`);
  }
});