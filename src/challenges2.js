// Desafio 10

function techList(array, name) {
  let listaObjetos = [];
  if (array.length > 0) {
    let arraySort = array.sort();
    for (let i = 0; i < arraySort.length; i += 1) {
      listaObjetos.push({ tech: arraySort[i], name });
    }
    return listaObjetos;
  }
  return 'Vazio!';
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],
  'Lucas'));

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
