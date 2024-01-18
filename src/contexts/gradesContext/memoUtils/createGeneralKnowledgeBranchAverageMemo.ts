import type { GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { type Accessor, createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { average } from "~/utils/average"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [gradesStore] = useGradesContext()
export const createGeneralKnowledgeBranchAverageMemo = (
  branchName: keyof GeneralKnowledge,
): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const branch = gradesStore.generalKnowledge[branchName]
    const semesterAverages = branch.semesters.map((semester) =>
      semester.length > 0 ? roundTo(average(semester), 2) : null,
    )
    const filteredAverages = semesterAverages.filter(
      (average) => average !== null,
    ) as number[]
    return filteredAverages.length > 0
      ? roundTo(average(filteredAverages), 10)
      : null
  })
}
