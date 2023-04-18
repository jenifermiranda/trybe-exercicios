//Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

const { estudantes } = require('./data');

const getStudent = estudantes.map((studant) => ({
  name: studant.nome,
  materia: studant.materias.reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name
}))

console.log(getStudent);