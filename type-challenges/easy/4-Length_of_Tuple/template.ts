type Length<T extends readonly any[]> = T['length']

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TTesla = typeof tesla

type L = Length<TTesla>

// 什么是Tuple？ Tuple和Array的区别
// Tuple 的 length 是一个值
// Array 的 length 是 number