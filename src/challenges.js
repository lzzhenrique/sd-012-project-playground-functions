// Desafio 1
function compareTrue(booleano1, booleano2) {
  if (booleano1 === true && booleano2 === true) {
    return true;
  } else if (booleano1 === false && booleano2 === false) {
    return false;
  } else {
    return false;
  }
} console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
} console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(" ",);
  return arrayDeStrings;
} console.log(splitSentence("foquete"));

// Desafio 4
function concatName(array) {
  let arrayDeStrings = (array[array.length - 1] + ',' + ' ' + array[0]);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === arrayDeStrings) {
      arrayDeStrings = array[index];
    }
    return arrayDeStrings;
  }
} console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadeDePontos = (3 * wins) + (1 * ties);
    return quantidadeDePontos;
  }
 console.log(footballPoints(14, 8));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
