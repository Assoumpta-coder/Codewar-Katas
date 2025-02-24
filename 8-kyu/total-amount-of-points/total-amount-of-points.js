function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    let scores = game.split(":");
    let ourScoreString = scores[0]; 
    let opponentScoreString = scores[1]; 
    let ourScore = Number(ourScoreString);
    let opponentScore = Number(opponentScoreString);
​
    if (ourScore > opponentScore) {
      totalPoints = totalPoints + 3;
    } else if (ourScore < opponentScore) {
    } else {
      totalPoints = totalPoints + 1;
    }
  }
  return totalPoints; 
}