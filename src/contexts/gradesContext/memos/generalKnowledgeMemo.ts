import { createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { average } from "~/utils/average"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { createGeneralKnowledgeBranchAverageMemo } from "~/contexts/gradesContext/memoUtils/createGeneralKnowledgeBranchAverageMemo"

const [gradesContext] = useGradesContext()

export const mathAverageMemo = createGeneralKnowledgeBranchAverageMemo(
  gradesContext,
  "math",
)
export const engAverageMemo = createGeneralKnowledgeBranchAverageMemo(
  gradesContext,
  "eng",
)

export const sociAverageMemo = createGeneralKnowledgeBranchAverageMemo(
  gradesContext,
  "overallCulture",
)

export const mathEngAverageMemo = createMemo(() => {
  let mathEng = null
  if (mathAverageMemo() !== null && engAverageMemo() !== null) {
    mathEng = roundTo(average([mathAverageMemo(), engAverageMemo()]), 2)
  } else if (mathAverageMemo() !== null) {
    mathEng = mathAverageMemo()
  } else if (engAverageMemo() !== null) {
    mathEng = engAverageMemo()
  }
  return mathEng
})
