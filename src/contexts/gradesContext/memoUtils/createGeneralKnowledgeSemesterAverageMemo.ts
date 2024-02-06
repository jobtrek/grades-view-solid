import type { GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { type Accessor, createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { average } from "~/utils/average"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [gradesStore] = useGradesContext()
export const createGeneralKnowledgeSemesterAverageMemo = (
  branchName: keyof GeneralKnowledge,
  semesterNumber: number,
): Accessor<number | null> => {
  // eslint-disable-next-line solid/reactivity
  return createMemo<number | null>(() => {
    const semesterGrades =
      gradesStore.generalKnowledge[branchName].semesters[semesterNumber]
    return semesterGrades.length > 0
      ? roundTo(average(semesterGrades), 2)
      : null
  })
}
