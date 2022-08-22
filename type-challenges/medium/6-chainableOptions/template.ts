type Chainable<T extends {} = {} > = {
  option<K extends string, V>(key: K, value: K extends keyof T ? V extends T[K] ? never : V : V): Chainable<Omit<T,K> & {[P in K]: V}>
  get(): T
}

// extends 在ts中的三个用途
// 1. 表示继承/ 拓展 -> Class

// 2. 表示约束 -> 泛型约束

// 3. 表示分配 -> A extends B ? A 可以分配给B : A 不可以分配给B 


// [mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
// type OptionsFlags<Type> = {
//   [Property in keyof Type]: boolean
// }
