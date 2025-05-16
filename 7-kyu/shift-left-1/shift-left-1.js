function shiftLeft(s, t) {
  let moves = 0;
  while (s !== t) {
    if (s.length > t.length) {
      s = s.substring(1);
      moves++;
    } else if (t.length > s.length) {
      t = t.substring(1);
      moves++;
    } else {
      if (s.charAt(0) === t.charAt(0)) {
        s = s.substring(1);
        moves++;
      } else {
        s = s.substring(1);
        t = t.substring(1);
        moves += 2;
      }
    }
    if (s === "" && s !== t) {
      moves += t.length;
      t = "";
    }
    if (t === "" && s !== t) {
      moves += s.length;
      s = "";
    }
  }
  return moves;
}
​