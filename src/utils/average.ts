export const average = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b) / numbers.length
}
