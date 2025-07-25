function sentencify(words) {
  if (!words || words.length === 0) {
    return "";
  }
  let firstWord = words[0];
  let capitalizedFirstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
  let newWordArray = [capitalizedFirstWord, ...words.slice(1)];
  let sentence = newWordArray.join(" ");
  sentence += ".";
  return sentence;
}