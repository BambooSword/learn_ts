type DeepReadonly<T> = T extends Record<string, unknown>
  ? {
      readonly [V in keyof T]: DeepReadonly<T[V]>
    }
  : T

type DeepReadonly1<T> = {
  readonly [V in keyof T]: T[V] extends Record<string, unknown>
    ? DeepReadonly1<T[V]>
    : T[V]
}
// infer 为 条件类型中的类型推断。
// infer可以在extends的条件语句中推断待推断的类型
