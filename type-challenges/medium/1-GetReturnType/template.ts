type MyReturnType<T> = T extends (...args: any) => infer D ? D : never