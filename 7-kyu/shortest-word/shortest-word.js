function findShort(s) {
  if (!s) {
    return 0; 
  }
  const words = s.split(' ');
  if (words.length === 0) {
      return 0; 
  }
  let shortestLength = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestLength) {
      shortestLength = words[i].length;
    }
  }
  return shortestLength;
}
​