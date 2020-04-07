const addTeacher = require('./teacher')
const addStudent = require('./student')

const school = (className, teacher, students) => {
  const obj = {}

  addTeacher(teacher)

  students.forEach((student) => {
    addStudent(student)
  })

  obj[teacher] = students

  const school = {}

  school[className] = obj

  return school
}

const log = (...args) => {
  console.log(...args)
}

module.exports  = {
  school,
  log,
}
