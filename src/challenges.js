// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base * altura)/2
  return area;
}
console.log(calcArea(2, 5))

// Desafio 3
function splitSentence() {
  // seu código aqui

}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (3 * wins) + ties
  return total;
}
console.log(footballPoints(0, 0))

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
