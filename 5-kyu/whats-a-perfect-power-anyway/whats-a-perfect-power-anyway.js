function isPP(n) {
  if (n <= 1) return null;
​
  for (let m = 2; m * m <= n; m++) {
    for (let k = 2; Math.pow(m, k) <= n; k++) {
      if (Math.pow(m, k) === n) return [m, k]; 
    }
  }
  return null;
}