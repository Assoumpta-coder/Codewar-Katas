function getDrinkByProfession(profession) {
  profession = profession.toLowerCase();
​
  if (profession === "jabroni") return "Patron Tequila";
  if (profession === "school counselor") return "Anything with Alcohol";
  if (profession === "programmer") return "Hipster Craft Beer";
  if (profession === "bike gang member") return "Moonshine";
  if (profession === "politician") return "Your tax dollars";
  if (profession === "rapper") return "Cristal";
​
  return "Beer";
}