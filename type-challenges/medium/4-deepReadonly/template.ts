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

// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//   return names.map(n => o[n]);
// }

// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = {
//     name: 'Jarid',
//     age: 35
// };
// let strings: (string | number)[] = pluck(person, ['name', 'age']); // ok, string[]