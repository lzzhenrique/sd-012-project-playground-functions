// Desafio 1
function compareTrue(valueA, valueB) {
  return (valueA && valueB);
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  let word = '';
  for(let index = 0; index < sentence.length; index += 1){
    if(index == sentence.length - 1){
      word += sentence[index];
      array.push(word);
    }
    else if(sentence[index] != ' '){
      word += sentence[index];
    }
    else{
      array.push(word);
      word = '';
    }
  }
  return array;
}
// let sentence = 'go Trybe';
// console.log(splitSentence(sentence));
// let sentence2 = 'vamo que vamo';
// console.log(splitSentence(sentence2));
let sentence3 = 'foguete';
console.log(splitSentence(sentence3));
// Desafio 4
function concatName() {
  // seu código aqui
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
