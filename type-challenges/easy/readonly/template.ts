type MyReadonly<T> = {
	readonly	[K in keyof T]: T[K]
}

// 3. 加上 readonly 关键字  新的知识点
//    - https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype