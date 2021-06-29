/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// eslint-disable-next-line sonarjs/cognitive-complexity
function splitSentence(string) {
  let result = [];
  let indexResult = 0;
  for (let indexString in string) {
    if (string[indexString] !== ' ') {
      if (result[indexResult] === undefined) {
        result[indexResult] = string[indexString];
      } else {
        result[indexResult] += string[indexString];
      }
    } else {
      indexResult += 1;
    }
  }
  return result;
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let count = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
      count = 1;
    } else if (array[index] === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line sonarjs/cognitive-complexity
function fizzBuzz(array) {
  let result = [];
  for (let number of array) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        result.push('fizzBuzz');
      } else {
        result.push('fizz');
      }
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9

// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
function encode(string) {
  let result = '';
  for (let character of string) {
    switch (character) {
    case ('a'):
      result += '1';
      break;
    case ('e'):
      result += '2';
      break;
    case ('i'):
      result += '3';
      break;
    case ('o'):
      result += '4';
      break;
    case ('u'):
      result += '5';
      break;
    default:
      result += character;
      break;
    }
  }
  return result;
}

// eslint-disable-next-line complexity
function decode(string) {
  let result = '';
  for (let character of string) {
    switch (character) {
    case ('1'):
      result += 'a';
      break;
    case ('2'):
      result += 'e';
      break;
    case ('3'):
      result += 'i';
      break;
    case ('4'):
      result += 'o';
      break;
    case ('5'):
      result += 'u';
      break;
    default:
      result += character;
      break;
    }
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
