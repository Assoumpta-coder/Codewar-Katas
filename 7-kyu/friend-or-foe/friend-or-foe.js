function friend(friends) {
  const filteredFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      filteredFriends.push(friends[i]);
    }
  }
  return filteredFriends;
}
​