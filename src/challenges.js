// Desafio 1
function compareTrue(first, second) {
  // seu código aqui
  return first === true && second === true ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (Number(base) && Number(height)) ? ((base * height) / 2) : 'Not a Number';
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.length > 0 ? sentence.split(' ') : 'string empyt';
}

// Desafio 4
function concatName(arrStrings) {
  // seu código aqui
  return arrStrings.length >= 1 ? `${arrStrings[arrStrings.length-1]}, ${arrStrings[0]}` : 'array too short';
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
