type Push<T, U> = T extends [...infer A] ? [...A, U] : never
// type Push<T extends any[], U> = [...T, U]
