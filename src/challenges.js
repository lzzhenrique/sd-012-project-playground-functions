// Desafio 1
function compareTrue(param1, param2) {
  let confirm = false;
  if (param1 === true && param2 === true) {
    confirm = true;
  }
  return confirm;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  phrase = phrase.split(' ');
  return phrase;
}

// Desafio 4
function concatName(arrayWord) {
  let lastItem = arrayWord[arrayWord.length - 1];
  let firstItem = arrayWord[0];
  let fullName = lastItem + ', ' + firstItem;

  return fullName;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
