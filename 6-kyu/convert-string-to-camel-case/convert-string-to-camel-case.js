function toCamelCase(str) {
  let result = '';
  let capitalizeNext = false;
​
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
​
    if (char === '-' || char === '_') {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char;
      }
    }
  }
​
  return result;
}
​