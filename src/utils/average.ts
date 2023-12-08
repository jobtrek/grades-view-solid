export const average = (numbers: number[]): number | null => {
  return numbers.reduce((a, b) => a + b) / numbers.length || null
}
