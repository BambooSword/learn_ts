type MyReadonly2<T, K extends keyof T = keyof T> = {
  [C in keyof T as C extends K ? never : C]: T[C]
} & {
  readonly [V in K]: T[V]
}
// Omit 的实现
// 如果是K 为never 否则保留
