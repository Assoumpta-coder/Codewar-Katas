function capMe(names) {
return names.map((x)=>{
let lowerCased= x.toLowerCase();
let capitalized= lowerCased.charAt(0).toUpperCase();
let rest= lowerCased.slice(1);
return capitalized + rest
});
}