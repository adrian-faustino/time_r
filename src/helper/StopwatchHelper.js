// recieves object with h, m ,s, ms and returns toal in MS
export function getTotalMS(timeObj) {
  const { h, m , s, ms } = timeObj;

  const totalH = h * 60 * 60 * 1000;
  const totalM = m * 60 * 1000;
  const totalS = s * 1000;

  return totalH + totalM + totalS + ms;
}

// recieves total MS and returns an object with it in h, m s, and ms
export function formatMS(totalMS) {
  let totalMS_ = totalMS;

  const h = Math.floor(totalMS_ / (60 * 60 * 1000));
  if (h > 0) {
    totalMS_ = totalMS_ - (h * 60 * 60 * 1000);
  }

  const m = Math.floor(totalMS_ / (60 * 1000));
  if (m > 0) {
    totalMS_ = totalMS_ - (m * 60 * 1000);
  }

  const s = Math.floor(totalMS_ / (1000));
  if (s > 0) {
    totalMS_ = totalMS_ - (s * 1000);
  }
 
  const ms = totalMS_;

  return {h, m, s, ms};
}