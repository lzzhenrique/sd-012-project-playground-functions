// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(...array) {
  // seu código aqui
  let separate = array[array.length - 1]
  let separate2 = array[0];
  return separate  + ', ' + separate2;
}
// console.log(concatName('foguete', 'não', 'tem', 'ré'))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount(wins, ties) {
  // seu código aqui
  let vit = wins * 3;
  let emp = ties;
  return vit + emp;
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
