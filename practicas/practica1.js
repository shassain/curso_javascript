const students = [
  { id: 1, nombre: "Pedro", paterno: "Mendez", materno="Perez" },
  { id: 2, nombre: "Alberto", paterno: "Ibarra", materno="Mamani" },
  { id: 3, nombre: "Adrian", paterno: "Saavedra", materno="Condori" },
  { id: 4, nombre: "Fernanda", paterno: "Veliz", materno="Cortez" },
  { id: 5, nombre: "Karen", paterno: "Torrez", materno="Amezaga" },
  { id: 6, nombre: "Julia", paterno: "Quispe", materno="Quecaño" }
];
const subject = [
  { id: 1, nombre: "Matematicas" },
  { id: 2, nombre: "Fisica" },
  { id: 3, nombre: "Literatura" },
  { id: 4, nombre: "Historia" }
];

const inscriptions = [
  { subject_id: 1, student_id: 1, date="2020-01-01", amount: 150 },
  { subject_id: 2, student_id: 1, date="2020-01-02", amount: 170 },
  { subject_id: 3, student_id: 1, date="2020-01-04", amount: 120 },
  { subject_id: 4, student_id: 1, date="2020-01-01", amount: 100 },
  { subject_id: 1, student_id: 2, date="2020-01-02", amount: 150 },
  { subject_id: 3, student_id: 2, date="2020-01-04", amount: 120 },
  { subject_id: 4, student_id: 2, date="2020-01-06", amount: 100 },
  { subject_id: 2, student_id: 3, date="2020-01-03", amount: 170 },
  { subject_id: 3, student_id: 3, date="2020-01-01", amount: 120 },
  { subject_id: 4, student_id: 3, date="2020-01-02", amount: 100 },
  { subject_id: 1, student_id: 3, date="2020-01-06", amount: 150 },
  { subject_id: 1, student_id: 4, date="2020-01-07", amount: 150 },
  { subject_id: 4, student_id: 4, date="2020-01-05", amount: 100 },
  { subject_id: 2, student_id: 5, date="2020-01-02", amount: 170 },
  { subject_id: 3, student_id: 5, date="2020-01-03", amount: 120 },
  { subject_id: 4, student_id: 5, date="2020-01-04", amount: 100 },
  { subject_id: 3, student_id: 6, date="2020-01-06", amount: 120 },
  { subject_id: 2, student_id: 6, date="2020-01-09", amount: 170 },
]
//crear funciones para
//1.- retornar un array con los nombre de las subject
//2.- dado el nombre de una materia retornar los estudiantes inscriptos//cualquier materia
//3.- dado el id de un studiante retornar las materias en las que esta inscrito
//4.- el monto total de todas las incripciones.
//5.- dado un studiante agregarlo a studiants
//6.- el monto total gastado en inscripciones por el estudiante con el id N
//7.- retorne la fecha con mayor numero de inscritos