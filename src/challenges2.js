// Desafio 10
function techList(array, string) {
  let list = [];
  let sortedArray = array.sort();
  for (let key in array) {
    list[key] = {
      tech: sortedArray[key],
      name: string,
    }
  }
  return list;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
