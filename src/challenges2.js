// Desafio 10
function techList(tech, name) {
  // seu código aqui
  techs = tech.sort();
  let objLista = [];
  let empty = "Vazio!";
  if (tech.length === 0) {
    return empty;
  } else {
    for (let indexTech = 0; indexTech < techs.length; indexTech += 1) {
    let obj = {
    tech: techs[indexTech],
    name,
    };
    objLista.push(obj);
    };
  return objLista;
  };
};
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Artur"));

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
