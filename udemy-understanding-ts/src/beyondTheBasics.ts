// INTERSECTION

type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// 普通数据类型的 intersection 为包括的所有类型,即为 合并（combination）, 如果有相同的属性，则属性类型需要保持一致，否则会报错
// interface ElevateEmployee extends Admin, Employee {}
type ElevateEmployee = Admin & Employee
const e1: ElevateEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

// 在 union type中 intersection 后的类型为 union共有的类型(types in common)
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

// FUNCTION OVERLOADS
function add(a: Combinable, b: string): string
function add(a: string, b: Combinable): string
function add(a: number, b: number): number
// TYPE GUARDS
function add(a: Combinable, b: Combinable) {
  // this is the type guard: typeof
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const res = add('Max', ' Schwarz')

res.split(' ')

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  // type guard : in
  if ('privileges' in emp) {
    console.log(emp.privileges)
  }
  if ('startDate' in emp) {
    console.log('startDate', emp.startDate)
  }
}

class Car {
  drive() {
    console.log('Driving....')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck....')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo:', amount)
  }
}
type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000)
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)

// DISCRIMINATED UNIONS 可区分联合

interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  // discriminated unions
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break

    default:
      speed = animal.runningSpeed
      break
  }
  console.log('moving at speed ', speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })

// TYPE CASTING 类型转换

// const paragraph = document.getElementById('message-output')
// const userInput = <HTMLInputElement>document.getElementById('user-input')!
// const userInput = document.getElementById('user-input')! as HTMLInputElement
// userInput.value = 'Hi there'

// INDEX properties

interface ErrorContainer {
  // index properties
  [prop: string]: string
}

// Optional Chaining

const fetchedUserData = {
  id: '12',
  name: 'Max',
  job: { title: 'CEO', description: 'my own company' },
}
console.log(fetchedUserData?.job?.title)

// NULLISH COALESCING
const userInp = null

// const storedData = userInp || 'DEFAULT'
const storedData = userInp ?? 'DEFAULT'

console.log(storedData)
