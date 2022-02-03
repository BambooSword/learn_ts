type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type r = TupleToObject<typeof tuple>

function tupleToObject(array) {
  const obj = {}
  array.forEach(val => {
    obj[val] = val
  })

  return obj
}

// 1. 返回一个对象
// 2. 遍历 array, 在ts中使用 T[number]
// 3. @ts-expect-error 期望是报错
// - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
