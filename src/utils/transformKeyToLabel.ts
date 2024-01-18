export const transformKeyToLabel = <T extends Record<string, string>>(
  key: keyof T,
  labelMap: T,
): string => {
  return labelMap[key]
}
