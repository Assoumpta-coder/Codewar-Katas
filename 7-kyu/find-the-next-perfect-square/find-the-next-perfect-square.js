const findNextSquare = (sq) => {
  const root = Math.sqrt(sq);
  if (root % 1 === 0) {
    return (root + 1) * (root + 1);
  } else {
    return -1;
  }
};