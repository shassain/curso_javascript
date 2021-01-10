/* function saludame(nombre) {
  return "hola " + nombre
} */
/* const saludame = function (nombre) {
  return `hola ${nombre}`
} */
//const saludame = (nombre) => { return `hola ${nombre}` }
const saludame = (nombre, apellido) => `hola ${nombre} ${apellido}`

const suma = (a, b) => a + b

const operacion = (a, b, ope) => {
  let resp = 0
  switch (ope) {
    case '+': resp = a + b
      break;
    case '-': resp = a - b
      break;
    case '*': resp = a * b
      break;
  }
  return resp;
}
let persona = {
  nombre: "Juan",
  apellido_paterno: "Perez",
  apellido_materno: "Mendez",
  edad: 12
}

const fullname = ({ nombre, apellido_paterno, apellido_materno, edad }, titulo) => (`${titulo}: ${apellido_paterno} ${apellido_materno} ${nombre}, edad:${edad}`)

function myfunction(numero, callback) {
  if (numero % 2 == 0) {
    callback("es par")
  } else {
    callback("no es par")
  }
}
function imprimirResultado(resp) {
  console.log("funcion imprimirResultado", resp)
}
myfunction(22, function (resp) {
  console.log(resp)
});

