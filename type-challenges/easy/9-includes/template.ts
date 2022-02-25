// type Includes<T extends readonly any[], U> =U extends T[number] ? true : false
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends U
    ? true
    : Includes<Rest, U>
  : false

// extends 在ts中的三个用途
// 1. 表示继承/ 拓展 -> Class

// 2. 表示约束 -> 泛型约束

// 3. 表示分配 -> A extends B ? A 可以分配给B : A 不可以分配给B 

// TODO: 这道题没有通过全部测试用例