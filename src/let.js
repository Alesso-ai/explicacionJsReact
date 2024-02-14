// Identificadores del lenguaje

//En cambio, piensa en let como una persona que susurra algo en una esquina de la habitación, y solo las personas cercanas pueden escucharla.
export let extLet = 1;

//Puedes pensar en var como una persona que habla en voz alta en una habitación y todos pueden escucharla, independientemente de dónde estén en esa habitación.
export var extVar = 1;

if (true) {
  let intLet = 1;
  var intVar = 1;
  extVar = 2;

  console.log("Inside Function ---");
  console.log("extLet", extLet);
  console.log("extVar", extVar);
  console.log("intLet", intLet);
  console.log("intVar", intVar);
}

console.log("Outside Function ---");
console.log("extLet", extLet);
console.log("extVar", extVar);
console.log("intLet", intLet);
console.log("intVar", intVar);

export const A = 1;
A = 2;
