// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let result = [];
  // eslint-disable-next-line guard-for-in
  for (let index in array.sort()) {
    result[index] = {
      tech: array[index],
      name: nome,
    };
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
