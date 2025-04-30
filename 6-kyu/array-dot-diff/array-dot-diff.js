function arrayDiff(a, b) {
result=[];
setB= new Set(b);
  for(let i=0; i<a.length; i++){
  if(!setB.has(a[i])){
    result.push(a[i])
  }
  }
  return result
}
// function arrayDiff(a, b) {
//   const result = [];
​
//   for (let i = 0; i < a.length; i++) {
//     const elementA = a[i];
//     if (!b.includes(elementA)) {
//       result.push(elementA);
//     }
//   }
​
//   return result;
// }