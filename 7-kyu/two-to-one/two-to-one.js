function longest(s1, s2) {
let combined= `${s1}${s2}`
let uniqueStr= new Set(combined)
let newArr= [...uniqueStr]
let sortted= newArr.sort()
let finalStr= sortted.join("")
  return finalStr;
}
​