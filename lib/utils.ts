export const smoothExponentially = (value: number, max: number): number => {
  var a = -max / Math.pow(max, 2);
  return a * Math.pow(value - max, 2) + max;
};

export const getStatDisplayRatio = (statValue: number): number => {
  var maxStat = 255;
  var smoothedValue = smoothExponentially(statValue, 255);
  return Math.round((smoothedValue / maxStat) * 100) / 100;
};
