function digitalRoot(n) {
  let numStr = String(n);
  let sum = n;
  for (let i = 0; i < 100; i++) {
    if (numStr.length === 1) {
      return parseInt(numStr);
    }
    sum = 0;
    for (let j = 0; j < numStr.length; j++) {
      sum += parseInt(numStr[j]);
    }
    numStr = String(sum);
  }
  return parseInt(numStr);
}