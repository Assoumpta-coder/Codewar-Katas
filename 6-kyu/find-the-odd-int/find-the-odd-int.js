function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    const currentNumber = A[i];
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] === currentNumber) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return currentNumber;
    }
  }
}