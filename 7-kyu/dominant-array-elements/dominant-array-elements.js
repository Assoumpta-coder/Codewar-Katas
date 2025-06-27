function solve(arr) {
  const dominantElements = [];
  let maxRight = -1; 
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxRight) {
      dominantElements.unshift(arr[i]); // Add to the beginning to maintain original order
      maxRight = arr[i];
    }
  }
  return dominantElements;
}