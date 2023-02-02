function add(n1: number, n2: number) {
  return n1 + n2
}

const number1 = 5
const number2 = 2.5

const result = add(5, 2.5)
const person: {
  role: [number, string]
} = {
  role: [1, 'author'],
}
person.role.push('doctor')
// person.role[2] = 'cooker'
console.log(result)

// Enum

// const ADMIN = 0
// const READ_ONLY = 1;

enum Role {
  READ_ONLY = 'read only',
  ADMIN = 5,
  AUTHOR,
}

const baby = {
  role: Role.ADMIN,
}
