// Desafio 10
function techList(arr, name) {

  let obj = [];

  arr.forEach(element => {
    obj.push({
      tech: element,
      name: name
    });

  });

  return obj;
}

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
