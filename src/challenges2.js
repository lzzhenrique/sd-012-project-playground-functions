// Desafio 10
function techList(nomeTech, name) {
let code = []; 
nomeTech.sort();

  if (nomeTech.length > 4) {
    for (let index in nomeTech){
    code.push ({ tech: nomeTech[index],
    name: name});
    }
      return code;
  } else {
      return ('Vazio!');
  }
}

// Desafio 11
function generatePhoneNumber(numero) {


  if(numero.length < 11 || numero.length > 11){
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < numero.length; index += 1){
    if (numero[index] < 0 || numero[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let pC = [];
  for (let index1 = 0; index1 < numero.length ; index1 += 1){
    pC.push(numero[index1]);
  }
    verifica = ( '(' + pC[0] + pC[1] + ')' + ' ' + pC[2] + pC[3] + pC[4] + pC[5] + pC[6] + '-' + pC[7] + pC[8] + pC[9] + pC[10]);
    return verifica;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = Math.abs(lineA + lineB);
  let sumAC = Math.abs(lineA + lineC);
  let sumCB = Math.abs(lineC + lineB);
  let boolean = false;
  if (lineA < sumCB && lineB < sumAC && lineC < sumAB) {
    boolean = true
    return boolean;
  }
  return boolean;
}

// Desafio 13
function hydrate(bebida) {
 // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};