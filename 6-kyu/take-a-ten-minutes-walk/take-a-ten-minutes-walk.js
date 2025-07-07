function isValidWalk(walk) {
if(walk.length!==10) return false
  if(walk.filter(v => v==='n').length !== walk.filter(v => v==='s').length) return false
  if(walk.filter(v => v==='e').length !== walk.filter(v => v==='w').length) return false
  return true
//   let x=0;
//   y=0;
//   for (let i=0; walk.length; i++){
//     const direction = walk[i]
//     if(direction=== 'n'){
//       y++
//     }
//      if(direction=== 's'){
//       y--
//     }
//      if(direction=== 'e'){
//       x++
//     }
//      if(direction=== 'w'){
//       x--
//     }
//   }
//   return x===0 & y===0
}