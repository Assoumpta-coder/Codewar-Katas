function isPalindrome(x) {
  let cleanedString = '';
  const lowercasedX = x.toLowerCase(); 
  for (let i = 0; i < lowercasedX.length; i++) {
    const char = lowercasedX[i];
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleanedString += char;
    }
  }
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}