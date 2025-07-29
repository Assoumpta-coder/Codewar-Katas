​
function solution(input, markers) {
  const lines = input.split('\n');
  const processedLines = lines.map(line => {
    let currentLine = line;
    for (const marker of markers) {
      const markerIndex = currentLine.indexOf(marker);
      if (markerIndex !== -1) {
        currentLine = currentLine.substring(0, markerIndex);
      }
    }
    return currentLine.trimEnd(); 
  });
  return processedLines.join('\n'); 
}
​
​