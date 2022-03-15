type TupleToUnion<T> = T extends [... infer A] ? A[number] : never;
// type TupleToUnion<T extends unknown[]> = T[number]
type a = TupleToUnion<[1,2,3]>