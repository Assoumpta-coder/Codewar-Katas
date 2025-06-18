function parseInt(string) {
    const wordToNumber = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14,
        "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18,
        "nineteen": 19, "twenty": 20, "thirty": 30, "forty": 40,
        "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80,
        "ninety": 90
    };
    let totalResult = 0;
    let currentSegmentValue = 0;
    const cleanedStringNoHyphens = string.toLowerCase().split('-').join(' '); 
    const processedWords = cleanedStringNoHyphens
                                .split(' ')
                                .filter(word => word !== 'and' && word !== '');
    for (const word of processedWords) {
        if (wordToNumber[word] !== undefined) {
            currentSegmentValue += wordToNumber[word];
        } else if (word === "hundred") {
            currentSegmentValue *= 100;
        } else if (word === "thousand") {
            totalResult += currentSegmentValue * 1000;
            currentSegmentValue = 0;
        } else if (word === "million") {
            totalResult += currentSegmentValue * 1000000;
            currentSegmentValue = 0;
        }
    }
    totalResult += currentSegmentValue;
    return totalResult;
}