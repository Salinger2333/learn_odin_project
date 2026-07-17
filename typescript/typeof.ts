function f(){
  return {
    x:10,
    y:3
  }
}
// bad
// type R = ReturnType<f>

type R = ReturnType<typeof f>