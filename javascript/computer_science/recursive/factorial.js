// 尾调优版本
function factorial_aux(n, accu) {
  return n == 1 ? accu : factorial_aux(n - 1, n * accu);
}
function factorial(n) {
  return factorial_aux(n, 1);
}
