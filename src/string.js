// librerias mas famosas de front

//             0         1        2
const libs = ["React", "Vue", "Angular"];

console.log(`This Course is about ${libs[2]}`);

const l = libs.length;

// condicion ternaria si l es mayor a 1 entonces imprime 
console.log(`
    ${l > 1 ? `These ${l} libraries ` : "This library"}
    ${libs.join(",")}...
`);
