/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let result = [];
  for (let index in array.sort()) {
    result[index] = {
      tech: array[index],
      name: nome,
    };
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  let count = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in array) {
    if (array[index] > 9 || array[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let number of array) {
      if (array[index] === number) {
        count += 1;
        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    count = 0;
  }
  return (`(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineB + lineA)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let array = string.replace(/\D/g, '');
  let result = 0;
  for (let number of array) {
    result += parseInt(number, 10);
  }
  if (result > 1) {
    return (`${result} copos de água`);
  }
  return (`${result} copo de água`);
}

hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
