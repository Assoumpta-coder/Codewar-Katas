function XO(str) {
const lowerCaseStr = str.toLowerCase();
let xCount = 0; 
let oCount = 0;
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];
    if (char === 'x') {
      xCount++; 
    } else if (char === 'o') {
      oCount++;
    }
  }
  return xCount === oCount;
}
​