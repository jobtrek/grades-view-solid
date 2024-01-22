import type { GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { type Accessor, createMemo } from "solid-js"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [gradesStore] = useGradesContext()
export const createGeneralKnowledgeBranchIsAvailableSemester = (
  branchName: keyof GeneralKnowledge,
): Accessor<boolean> => {
  return createMemo<boolean>(() => {
    return (
      gradesStore.generalKnowledge[branchName].semesters.length <
      gradesStore.generalKnowledge[branchName].maxSemesters
    )
  })
}
