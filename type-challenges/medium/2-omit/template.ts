type MyOmit<T, K> = {
	[V in keyof T as V extends K ? never : V]: T[V]
}
// V in keyof T 

// V as (V extends K ? never : V) // 对V 进行断言，断言的结果根据 V extends K 而是 never 或 V


// never 能分配给所有类型, 所有类型都不能分配给never