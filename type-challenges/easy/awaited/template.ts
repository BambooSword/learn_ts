type MyAwaited<P extends Promise<any>> = P extends Promise<infer T>
  ? T extends Promise<any>
    ? MyAwaited<T>
    : T
  : never

// infer keyword
/* 
The keyword is helpful with any type constructor, 
type constructor is a type parameterized by another type variable,
so any type which has generic placeholder like A<B>,
where A is type constructor parametrized by B.
*/
// custom parameterized types
type Surprise<A> = { inside: A }
type UnpackSurprise<S> = S extends Surprise<infer Inside> ? Inside : never
type Num = UnpackSurprise<Surprise<number>> // Num is number

// use *infer* to get mapped types properties
type User = {
  id: number
  name: string
}

type Doc = {
  id: string
}

type GetProperty<T, Prop extends keyof T> = T extends {
  [K in Prop]: infer Value
}
  ? Value
  : never

type UserId = GetProperty<User, 'id'>
type DocId = GetProperty<Doc, 'id'>

type User1= {
  id: number
  kind: string
}

function makeCustomer<T extends User1>(u: T): T {
  // Below error, why?
  return {
    id: u.id,
    kind: 'customer',
  }
}

function makeCustomer1<T extends User1>(u: T): T {
  // the return type expects to also contain other property.
  return {
    ...u,
    id: u.id,
    kind: 'customer',
  }
}
function makeCustomer2<T extends User1>(u: T): User1 {
  // the return type expects to also contain other property.
  return {
    id: u.id,
    kind: 'customer',
  }
}

function makeCustomer3<T extends User1>(u: T): T {
  // Mark the output objects as T
  return {
    id: u.id,
    kind: 'customer',
  } as T
}
