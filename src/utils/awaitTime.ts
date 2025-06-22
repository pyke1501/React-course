export const awaitTime = (time: number = 2000) => {
  return new Promise((resovle: any) => {
    setTimeout(() => {
      resovle();
    }, time)
  })
}