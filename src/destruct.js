// La destructuracion es

const user = {
  name: "Alex",
  surname: "Ruiz",
  students: ["Alejandro Ruiz", "Adrian Iglesias", "Alejandro Santos"],
};

// Extraemos los atributos del objeto

const getFullName = ({ name, surname }) => `${name} ${surname}`;

const { name, surname } = user;

console.log(name)

console.log("getFullName: ", getFullName(user));

// Destructurando un objeto dentro de otro

const newUser = {
    ...user,
    name: "Laura"
}

// Extraer y renombrar un atributo de un objeto

const {name: newName } = newUser
console.log("newName", newName)


// Extraer items de un array

const [firsStudent, ...otherStudents] = newUser.students
console.log("firstStudent", firsStudent)
console.log("otherStudents", otherStudents)

// recortar el objeto key
const newObject = { newName, firsStudent}
console.log("newObject", newObject)

// Destructurar los parametros a un objeto

const sum = (...nums) => nums.reduce((total, num) => total + num, 0)
console.log("sum:", sum(2,2,2,2,2))