function duplicateCount(text){
  let caseConverted= text.toUpperCase();
  let counter={};
  for(let i=0; i<caseConverted.length; i++){
    let char = caseConverted[i];
    counter[char] = (counter[char] || 0) + 1;
  }
  let duplicates = 0;
  for (const char in counter) {
    if (counter[char] > 1) {
      duplicates++;
    }
  }
  return duplicates;
}