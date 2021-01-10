class Model {
  constructor(props) {
    this.props = props;
  }
  fullname() {
    return `${this.paterno} ${this.materno} ${this.nombre}`
  }
  save() {

  }
  esMayor() {
    if (this.edad >= 18) {
      return "Es mayor de edad"
    }
    else {
      return "Es menor de edad"
    }
  }
  verEmail() {
    return this.email ? this.email : "No existe el email"
    /* if(this.email!=undefined){
    return this.email;
  }else{
    return "No existe del email";
  } */
  }

}
class User extends Model {
  constructor(email, nombre, paterno, materno, edad) {
    super({ email, nombre, paterno, materno, edad })
    this.email = email;
    this.nombre = nombre;
    this.paterno = paterno;
    this.materno = materno;
    this.edad = edad;
  }
  fullname() {
    let dato = super.fullname();
    return `dentro de user:${dato}`
  }
}
class MPersona extends Model {
  constructor(id, nombre, paterno, materno, edad, celular) {
    super({ id, nombre, paterno, materno, edad, celular })
    this.id = id;
    this.nombre = nombre;
    this.paterno = paterno;
    this.materno = materno;
    this.edad = edad;
    this.celular = celular;
    this.estado = true;
  }
}
let persona = new MPersona(9, "Juan", "Medez", "Torrez", 32, 76161522);
let user = new User("admin@email.com", "Jose", "Mamani", "Perez", 21)
console.log(user.fullname(), persona.verEmail())