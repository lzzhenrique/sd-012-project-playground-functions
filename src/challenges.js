// Desafio 1
function compareTrue(bool1, bool2) {
  let saoTrue = false;
  if ((bool1 && bool2) === true) {
    saoTrue = true;
  }
  return saoTrue;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let palavra = '';
  let fraseDividida = [];
  for (let index = 0; index <= string.length; index += 1) {
    if ((string[index] === ' ') || (index === string.length)) {
      fraseDividida.push(palavra);
      palavra = '';
    } else {
      palavra += string[index];
    }
  }
  return fraseDividida;
}

// Desafio 4
function concatName(arrayString) {
  let firstItem = arrayString[0];
  let lastItem = arrayString.pop();
  let lastFirstItem = `${lastItem}, ${firstItem}`;
  return lastFirstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsForWin = 3;
  let pointsForTies = 1;
  let totalPointsOfWin = wins * pointsForWin;
  let totalPointsOfTie = ties * pointsForTies;
  let totalPoints = totalPointsOfWin + totalPointsOfTie;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let numbers = arrayNumbers;
  let maiorNumero = numbers[0];
  let repeticoes = 0;
  for (let index1 in numbers) {
    if (numbers[index1] > maiorNumero) {
      maiorNumero = numbers[index1];
    }
  }
  for (let index2 in numbers) {
    if (maiorNumero === numbers[index2]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let resposta;
  if (distanceCat1 < distanceCat2) {
    resposta = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(array) {
  let novoArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 !== 0)) {
      novoArray.push('fizz');
    } else if ((array[index] % 5 === 0) && (array[index] % 3 !== 0)) {
      novoArray.push('buzz');
    } else if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      novoArray.push('fizzBuzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
}

// Desafio 9
function encode(string) {
  let newString = '';
  let vowelNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let index = 0; index < string.length; index += 1) {
    let str = string[index];
    if (vowelNumber[str] === undefined) {
      newString += str;
    } else {
      newString += vowelNumber[str];
    }
  }
  return newString;
}
function decode(string) {
  let newString = '';
  let vowelNumber = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < string.length; index += 1) {
    let str = string[index];
    if (vowelNumber[str] === undefined) {
      newString += str;
    } else {
      newString += vowelNumber[str];
    }
  }
  return newString;
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
