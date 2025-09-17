function longer(s) {
  const words = s.split(' ');
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return words.join(' ');
}