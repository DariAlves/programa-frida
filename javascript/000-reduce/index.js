// Somar elementos do array de números
function somarValoresArray(array) {
  // Valor inicial
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma;
}

// Array que queremos somar os elementos
const valores = [100, 50, 78, 96, 100];

const resultado = somarValoresArray(valores);
console.log(`Resultado da soma usando o for marotão: ${resultado}`); // Resultado: 424

// Usando o método reduce para somar todos os elementos de um array

// prettier-ignore
const soma = valores.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0); // O zero representa a nosso valor inicial.

console.log(`Resultado da soma usando método reduce: ${soma}`); // Resultado: 424
