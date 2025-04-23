function findOutlier(integers){
  let odd=[];
  let even=[];
for(let i=0; i<integers.length; i++){
  if(integers[i] %2 ===0){
   odd.push(integers[i]);
  }else{
   even.push(integers[i]);
  }
}
  return even.length === 1 ? even[0] : odd[0]; 
}