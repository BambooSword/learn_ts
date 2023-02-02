abstract class Department {
  // name: string
  private employees: string[] = []
  constructor(public name: string, protected id: string) {}

  abstract describe(): void
  addEmployee(n: string) {
    this.employees.push(n)
  }
  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment
  private constructor(protected id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }
  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    return (this.instance = new AccountingDepartment('007', []))
  }

  describe(this: AccountingDepartment): void {
    console.log(
      'this is department ',
      'Accounting, the id of this department is ',
      this.id
    )
  }
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found.')
  }
  set mostRecentReport(val) {
    this.lastReport = val
  }
  addReport(r: string) {
    this.reports.push(r)
    this.lastReport = r
  }
  static createEmployee(name: string) {
    return { name }
  }
}

const accounting = AccountingDepartment.getInstance()
accounting.describe()
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()
accounting.addReport('something went wrong')
console.log(accounting.mostRecentReport)

console.log('static ===>', AccountingDepartment.createEmployee('Mike'))

interface Person {
  readonly name: string
  age: number
  greet(): void
}

let user1: Person

user1 = {
  name: 'Max',
  age: 30,
  greet() {},
}

// type AddFn = (a: number, b: number) => number

interface AddFn {
  (a: number, b: number): number // interface as function types
  outputName?: string // optional properties
}

let adds: AddFn
adds = (n: number, n2: number) => n + n2
