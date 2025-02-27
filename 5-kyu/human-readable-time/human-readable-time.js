function humanReadable(seconds) {
  if (seconds < 0 || seconds > 359999) {
    return null;
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(remainingSeconds).padStart(2, '0');
​
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}