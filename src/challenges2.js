// Desafio 10
function techList(Array, Nome) {
  let resultado = [];
  Array.forEach(function(tecnologia) {
    resultado.push({tech: tecnologia,
    name: Nome})
  });
    return resultado;
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
