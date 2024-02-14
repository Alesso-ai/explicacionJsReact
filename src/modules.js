import MyImportedClass, { hello } from "./module-export.js"
import * as allImports from "./module-export.js"

console.log(hello())
const myClassInModules = new MyImportedClass();
console.log(myClassInModules.goodbye());

console.log(allImports.hello())
const myClass2 = new allImports.default();
console.log(myClass2.goodbye())