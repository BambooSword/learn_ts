const names: Array<string> = []

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done')
  }, 2000)
})

promise.then(data => data.split(''))

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB)
}
const mergeObj = merge({ name: 'Max' }, { age: 30 })
mergeObj.age
