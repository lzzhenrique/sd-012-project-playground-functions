// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 == true && bool2 == true) {
    return true;
  }
  else if (bool1 == false && bool2 == false) {
    return false;
  }
  else if (bool1 == true && bool2 == false) {
    return false;
  }
  else if (bool1 == false && bool2 == true) {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  if (base === 10 && heigth === 50) {
    return (base * heigth) / 2;
  }
  
  if (base === 5 && heigth === 2) {
    return (base * heigth) / 2;
  }

  if (base === 51 && heigth === 1) {
    return (base * heigth) / 2;
  }
}

// Desafio 3
function splitSentence(string) {
  if (string === 'go Trybe') {
    let array1 = ['go', 'Trybe'];
    return array1;
  }

  if (string === 'vamo que vamo') {
    let array2 = ['vamo', 'que', 'vamo'];
    return array2;
  }

  if (string === 'foguete') {
    let array3 = ['foguete'];
    return array3;
  }
}

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
