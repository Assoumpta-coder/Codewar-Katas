function getMinMax(arr){
if(!arr || arr.length===0){
  return [undefined,undefined]
}
  let maxValue= arr[0];
  let minValue= arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i]<minValue){
      minValue= arr[i]
    }
    if(arr[i]>maxValue){
      maxValue=arr[i]
    }
  }
  return [minValue,maxValue];
};