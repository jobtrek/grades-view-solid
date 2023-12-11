export const average = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b) / numbers.length
}

export const weightedAverage = (numbers: number[], weights: number[]): number => {
  const sum = numbers.reduce((a, b, i) => a + b * weights[i], 0)
  const weightSum = weights.reduce((a, b) => a + b, 0)

  return sum / weightSum
}
