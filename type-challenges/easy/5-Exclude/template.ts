type MyExclude<T, U> = T extends U ? never : T;
type c = Exclude<string | number | (() => void), Function>
type cm = MyExclude<string | number | (() => void), Function>
type d = Exclude<string, string>
