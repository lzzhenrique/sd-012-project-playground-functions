// Desafio 10
function techList(array, name) {
  // seu código aqui
  array = array.sort();
  let output = [];
  for (let index = 0; index < array.length; index += 1) {
    output.push({tech:`${array[index]}`,name})
  }
  return output;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))
// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length !== 11){
    return "Array com tamanho incorreto.";
  }
  let string = numbers.join("");
  numbers = numbers.sort(function(a, b){return a-b});
  if (numbers[0] < 0 || numbers[10] > 9) {
    return "não é possível gerar um número de telefone com esses valores";
  }
  let occurences = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] === numbers [index - 1]){
      occurences += 1;
      if (occurences > 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    else {
      ocurrences = 1;
    }
  }
  string = "("+string.substr(0,2)+") "+string.substr(2,5)+"-"+string.substr(7);
  return string;
}
//console.log(generatePhoneNumber([1, 1, 2, 3, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
