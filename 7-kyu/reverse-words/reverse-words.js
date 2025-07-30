function reverseWords(str) {
  let result = [];
  let currentWord = "";
​
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result.push(currentWord.split('').reverse().join(''));
      currentWord = "";
      result.push(' ');
    } else {
      currentWord += str[i];
    }
  }
  if (currentWord.length > 0) {
    result.push(currentWord.split('').reverse().join(''));
  }
  return result.join('');
}