function AmIAfraid(day, num) {
    const lowerCaseDay = day.toLowerCase();
    if (lowerCaseDay === 'monday') {
        return num === 12;
    } else if (lowerCaseDay === 'tuesday') {
        return num > 95;
    } else if (lowerCaseDay === 'wednesday') {
        return num === 34;
    } else if (lowerCaseDay === 'thursday') {
        return num === 0;
    } else if (lowerCaseDay === 'friday') {
        return num % 2 === 0;
    } else if (lowerCaseDay === 'saturday') {
        return num === 56;
    } else if(lowerCaseDay === 'sunday') {
        return num === 666 || num === -666;
    } 
  return false
  }
​