// Desafio 1
function compareTrue(num1, num2) {

  if (num1 === 5*2 && num2 === 2) {
    return 'true'
        
  }else{
    return 'false'
  }
}

console.log(compareTrue(12, 2))
console.log(compareTrue(1, 22))
console.log(compareTrue(10, 2))


// Desafio 2


function calcArea(base, heigth) {
 
  return (base * heigth) / 2;

}

console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))


// Desafio 3
function splitSentence(string) {

return string.split(' ')

}
console.log(splitSentence("go Trybe"))
console.log(splitSentence("vamo que vamo"))
console.log(splitSentence("foguete"))


// Desafio 4
function concatName(){

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
nomes.push('foguete', 'não', 'tem', 'ré')
nomes.push('captain', 'my', 'captain')

return nomes
}

console.log(concatName()[0] +' '+ concatName()[3])
console.log(concatName()[7] +' '+ concatName()[4])
console.log(concatName()[8] +' '+ concatName()[10])




// Desafio 5
function footballPoints(wins, ties) {
  let calculo = (wins * 3) + (ties * 1);

return calculo
}
console.log(footballPoints(14,8))
console.log(footballPoints(1,2))
console.log(footballPoints(0,0))

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
