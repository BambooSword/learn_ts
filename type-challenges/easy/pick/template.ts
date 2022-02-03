type MyPick<T, K extends keyof T> = {
  [V in K]: T[V]
}

function myPick(todo, keys) {
  const obj = {}

  todo.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })
	return obj;
}

// 1. 返回一个对象
// 2. 遍历foreach [mapped types] https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. todo[key] 取值 [Indexed Access types] https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 检测key是否在todo中 
// [Lookup Types] https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
// - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
// - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints