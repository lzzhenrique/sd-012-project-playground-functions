// Desafio 10
function techList(array, name) {
  let listaObjetos = [];
  for (let i = 0; i < array.length; i += 1) {
    listaObjetos.push({ tech: array[i], name });
  }
  if (listaObjetos.length === 0) {
    return 'Vazio!';
  }
  return listaObjetos;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
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
