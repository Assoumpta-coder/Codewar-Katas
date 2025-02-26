function sumArray(arr){
if (!Array.isArray(arr) || arr.length <= 2) return 0;
​
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted.slice(1, -1).reduce((sum, num) => sum + num, 0);
}
​
​