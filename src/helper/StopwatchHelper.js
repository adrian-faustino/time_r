// recieves object with h, m ,s, ms and returns toal in MS
export function getTotalMS(timeObj) {
  const { h, m , s, ms } = timeObj;

  const totalH = h * 60 * 60 * 1000;
  const totalM = m * 60 * 1000;
  const totalS = s * 1000;

  return totalH + totalM + totalS + ms;
}

// returns elapsed MS between end and start
export function msElapsed(start, end) {
  return end - start;
}

// recieves total MS and returns an object with it in h, m s, and ms
export function formatMS()
