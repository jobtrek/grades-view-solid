import { createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { average } from "~/utils/average"
import { createGeneralKnowledgeBranchAverageMemo } from "~/contexts/gradesContext/memoUtils/createGeneralKnowledgeBranchAverageMemo"

export const mathAverageMemo = createGeneralKnowledgeBranchAverageMemo("math")
export const engAverageMemo = createGeneralKnowledgeBranchAverageMemo("eng")

export const sociAverageMemo =
  createGeneralKnowledgeBranchAverageMemo("overallCulture")

export const mathEngAverageMemo = createMemo(() => {
  let mathEng = null
  if (mathAverageMemo() !== null && engAverageMemo() !== null) {
    // @ts-expect-error null are handled by the if statement
    mathEng = roundTo(average([mathAverageMemo(), engAverageMemo()]), 2)
  } else if (mathAverageMemo() !== null) {
    mathEng = mathAverageMemo()
  } else if (engAverageMemo() !== null) {
    mathEng = engAverageMemo()
  }
  return mathEng
})
