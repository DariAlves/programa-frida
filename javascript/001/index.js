const { somar } = require('./modulos/calculadora');

console.log(somar(10, 5));

// Desestruturar
const pet = {
  nome: 'Fridoca',
  idade: 6,
  tutora: 'Adriana',
  raca: 'Todas',
};

const { idade, raca, tutora, nome } = pet;

console.log(`A tutora ${tutora} tem uma pet chamada ${nome}`);
