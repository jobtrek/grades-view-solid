export const roundTo = (n: number, multiplier: number = 10): number => {
  return Math.round(n * multiplier) / multiplier
}
